import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Downloads() {
  const { t } = useTranslation();
  return (
    <section
      id="downloads"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("downloads.md")),
      }}
    ></section>
  );
}
