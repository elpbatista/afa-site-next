import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Contribute() {
  const { t } = useTranslation();
  return (
    <section
      id="contribute"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("contribute.md")),
      }}
    >
    </section>
  );
}
