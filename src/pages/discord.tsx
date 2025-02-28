import { useTranslation } from "react-i18next";
import { HeaderRoute } from "../components/HeaderRoute";
import CloakedHead from "../util/CloakedHead";

export function DiscordPage() {
  const { t } = useTranslation();

  return (
    <HeaderRoute>
      <CloakedHead
        originalTitle={t("titles.discord")}
        originalFavicon="/logo.png"
      />
      <section className="h-full">
        <div className="flex h-full flex-col items-center justify-center">
          <img src="/services.png" className="h-72 w-72"></img>
          <div className="flex flex-col items-center p-6">
            <p className="font-roboto text-4xl font-bold text-input-text">
              {t("discord.title")}
            </p>
            <span className="font-roboto text-3xl text-input-text">{t("discord.sub")}</span>
          </div>
          <a href="https://discord.gg/unblocker" className="p-6">
            <button className="font-roboto h-14 w-56 rounded-2xl border border-input-border-color bg-input p-2 text-center text-xl placeholder:text-input-text focus:outline-none text-input-text">
              {t("discord.button1")}
            </button>
          </a>
          <a
            href="/~/uv/https%3A%2F%2Fdiscord.com%2Finvite%2Funblocker"
            className="p-6"
          >
            <button className="font-roboto h-14 w-56 rounded-2xl border border-input-border-color bg-input p-2 text-center text-xl placeholder:text-input-text focus:outline-none text-input-text">
              {t("discord.button2")}
            </button>
          </a>
        </div>
      </section>
    </HeaderRoute>
  );
}
