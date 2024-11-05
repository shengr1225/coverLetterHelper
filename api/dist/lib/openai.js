var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var openai_exports = {};
__export(openai_exports, {
  chatCompletion: () => chatCompletion,
  createThreadAndAddMessage: () => createThreadAndAddMessage,
  findOrCreateAssistant: () => findOrCreateAssistant,
  listMessage: () => listMessage,
  waitForThread: () => waitForThread
});
module.exports = __toCommonJS(openai_exports);
var import_promise = __toESM(require("@babel/runtime-corejs3/core-js/promise"));
var import_set_interval = __toESM(require("@babel/runtime-corejs3/core-js/set-interval"));
var import_openai = __toESM(require("openai"));
const openai = new import_openai.default({
  apiKey: process.env.CHATGPT_KEY,
  organization: "org-i5rE8cAdISQ4NB4qFrXLKjeK"
});
const findOrCreateAssistant = async (id) => {
  let assistant = await openai.beta.assistants.retrieve(id);
  if (!assistant) {
    const params = {
      name: "Cover letter helper",
      instructions: "You are a helpful ChatGPT that generate cover letter based on resume, company description and job description.During the process, please follow principles below: 1. The personality is professional with normal words 2. Specific how my experience aligns with the job description 3. Explain one thing that attract me of the company",
      model: "gpt-4-turbo"
    };
    assistant = await openai.beta.assistants.create(params);
  }
  return assistant.id;
};
const createThreadAndAddMessage = async (body) => {
  let thread;
  if (body.threadId) {
    thread = await openai.beta.threads.retrieve(body.threadId);
  } else {
    thread = await openai.beta.threads.create();
  }
  openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: "here is the updated job description: " + body.aboutJob
  });
  openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: "here is the updated company description: " + body.aboutCompany
  });
  openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: "here is my updated resume: " + body.resume
  });
  console.log("thread id: " + thread.id);
  return thread.id;
};
const waitForThread = async (threadId, assistantId) => {
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId
  });
  const waitForRun = (run2) => {
    return new import_promise.default((resolve, reject) => {
      const id = (0, import_set_interval.default)(async () => {
        const status = (await openai.beta.threads.runs.retrieve(threadId, run2.id)).status;
        console.log(status);
        if (status === "completed") {
          clearInterval(id);
          resolve("completed");
        }
      }, 1e3);
    });
  };
  return waitForRun(run);
};
const listMessage = async (threadId) => {
  const message = await openai.beta.threads.messages.list(threadId);
  return message;
};
const chatCompletion = async (body) => {
  const params = {
    messages: [{
      role: "system",
      content: "You are a helpful ChatGPT that generate cover letter based on resume, company description and job description.During the process, please follow principles below: 1. The personality is professional with normal words 2. Specific how my experience aligns with the job description 3. Explain one thing that attract me of the company"
    }, {
      role: "user",
      content: "here is the job describtion: " + body.aboutJob
    }, {
      role: "user",
      content: "here is the company describtion: " + body.aboutCompany
    }, {
      role: "user",
      content: "here is my resume: " + body.resume
    }],
    model: "gpt-3.5-turbo",
    stream: true,
    temperature: 1.2
  };
  const stream = await openai.chat.completions.create(params);
  return stream;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  chatCompletion,
  createThreadAndAddMessage,
  findOrCreateAssistant,
  listMessage,
  waitForThread
});
//# sourceMappingURL=openai.js.map
