"use client";

import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/client";
import { styles } from "@/lib/styles";
import { faqData } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function FAQ() {
  const { t } = useTranslation();

  return (
    <section id="faq">
      <div className="container py-16">
        <div className="mx-auto mb-12 max-w-screen-md text-center">
          <h5 className={styles.subtitle}>{t("faq")}</h5>
          <h2 className={cn("mt-1", styles.title)}>{t("faqFullForm")}</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={`faq-${index + 1}`} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
