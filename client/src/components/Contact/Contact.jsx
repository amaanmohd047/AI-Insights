import { useState } from "react";

import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import FadeInWrapper from "../ui/FadeInWrapper";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleSetCopy() {
    navigator.clipboard.writeText("info@insightai.com");
    setCopied(true);
  }

  function handleResetCopy() {
    setCopied(false);
  }

  return (
    <div className="w-full bg-indigo-50" id="contact">
      <div className="mx-auto md:w-[80%] flex flex-col sm:mb-24 items-center justify-center text-center mb-36">
        <FadeInWrapper>
          <SectionHeading>Contact Us</SectionHeading>
        </FadeInWrapper>
        <div className="space-y-4">
          <FadeInWrapper>
            <p className="text-slate-regular mb-12 mt-2 text-sm lg:text-base">
              Have questions or interested in learning more about our solutions?
              Contact us today to speak with one of our experts.
            </p>
          </FadeInWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <FadeInWrapper>
              <a href="mailto:info@insightai.com" target="_blank">
                <Button type="secondary"> Say Hello </Button>
              </a>
            </FadeInWrapper>
            <FadeInWrapper>
              <button
                onClick={handleSetCopy}
                onBlur={handleResetCopy}
                className="text-slate-600 text-sm lg:text-base font-mono tracking-tighter mt-2 underline underline-offset-2 hover:scale-105 hover:text-indigo-900 transition-all duration-200 ease-in-expo focus:text-indigo-900 focus:no-underline"
              >
                Get E-Mail {copied && "✔️ copied! "}
              </button>
            </FadeInWrapper>
          </div>
          <FadeInWrapper>
            <p className="text-slate-600 mt-8 text-sm lg:text-base">
              © InsightAI 2024. All Rights Reserved.
            </p>
          </FadeInWrapper>
        </div>
      </div>
    </div>
  );
}
