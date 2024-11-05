import React, { MutableRefObject, useRef, useState } from 'react'

import { LinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Radio,
  Text,
  RadioGroup,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Input,
  Textarea,
  useColorMode,
} from '@chakra-ui/react'
import { DOMParser } from '@xmldom/xmldom'
import { PDFDocumentLoadingTask } from 'pdfjs-dist/types/src/display/api'
import * as pdfJsLib from 'pdfjs-dist/webpack.mjs'
import PizZip from 'pizzip'

import { madeupTextForPDF } from 'src/util/util'

type propType = {
  onEnterResume: React.Dispatch<React.SetStateAction<string>>
}

const Step1 = (props: propType) => {
  const fileInputRef: MutableRefObject<HTMLInputElement> = useRef()
  const [tabIndex, setTabIndex] = useState(0)
  const [editingResume, setEditingResume] = useState('')
  const { colorMode } = useColorMode()
  pdfJsLib.GlobalWorkerOptions.workerSrc =
    '../../build/webpack/pdf.worker.bundle.js'

  const str2xml = (str) => {
    if (str.charCodeAt(0) === 65279) {
      // BOM sequence
      str = str.substr(1)
    }
    return new DOMParser().parseFromString(str, 'text/xml')
  }

  // Get paragraphs as javascript array
  const getParagraphs = (content) => {
    const zip = new PizZip(content)
    const xml = str2xml(zip.files['word/document.xml'].asText())
    const paragraphsXml = xml.getElementsByTagName('w:p')
    const paragraphs = []

    for (let i = 0, len = paragraphsXml.length; i < len; i++) {
      let fullText = ''
      const textsXml = paragraphsXml[i].getElementsByTagName('w:t')
      for (let j = 0, len2 = textsXml.length; j < len2; j++) {
        const textXml = textsXml[j]
        if (textXml.childNodes) {
          fullText += textXml.childNodes[0].nodeValue
        }
      }
      if (fullText) {
        paragraphs.push(fullText)
      }
    }
    return paragraphs.join('\n')
  }

  const onFileUpload = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onload = async (e) => {
      const target = e.target
      const content = target.result
      let result = ''
      fileInputRef.current.value = ''

      if (file.type == 'application/pdf') {
        const pdfData = new Uint8Array(content as ArrayBufferLike)
        const pdfLoadingTask: PDFDocumentLoadingTask =
          pdfJsLib.getDocument(pdfData)

        const pdfDocument = await pdfLoadingTask.promise
        result = await madeupTextForPDF(pdfDocument)
        console.log(result)
      } else {
        result = getParagraphs(content)
      }
      props.onEnterResume(result)
      setTabIndex(1)
      setEditingResume(result)
    }
    reader.onerror = (err) => {
      console.error(err)
    }
    reader.readAsArrayBuffer(file)
  }

  return (
    <Box pt="8">
      <Heading color="text" size="md" my="6">
        Step 1: Enter Resume
      </Heading>

      <Tabs
        variant="unstyled"
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <RadioGroup p="4" border="2px" borderRadius="md" borderColor="gray.300">
          <TabList gap={2}>
            <Radio value="file" checked={true}>
              <Tab as="b">Upload File</Tab>
            </Radio>
            <Radio value="text">
              <Tab as="b">Text</Tab>
            </Radio>
          </TabList>
        </RadioGroup>
        <TabPanels>
          <TabPanel px="0">
            <Text color="text" mb={2}>
              Upload your resume*
            </Text>
            <label
              htmlFor="upload_file"
              style={{
                border: '1px solid gray',
                padding: '4px 0 4px 12px',
                display: 'flex',
                borderRadius: '6px',
                backgroundColor:
                  colorMode == 'light' ? 'white' : 'rgba(255, 255, 255, 0.12)',
                cursor: 'pointer',
                alignItems: 'baseline',
              }}
            >
              <LinkIcon mr="2" />
              Click here to select a file
            </label>
            <Input
              ref={fileInputRef}
              id="upload_file"
              bg="white"
              type="file"
              opacity={0}
              zIndex={-1}
              position="absolute"
              onChange={onFileUpload}
            />
            <Text color="text" size="xs" mt="1">
              Support file type: .pdf .doc .docx .txt
            </Text>
          </TabPanel>
          <TabPanel px="0">
            <Text mb={2}>Your resume*</Text>
            <Textarea
              bg="textarea"
              h="300"
              placeholder="Enter your resume here..."
              onChange={(e) => {
                setEditingResume(e.target.value)
                props.onEnterResume(e.target.value)
              }}
              value={editingResume}
            ></Textarea>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Step1
