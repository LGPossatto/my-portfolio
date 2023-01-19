import styles from "../styles/pages/Page404.module.scss";

import Icon from "../assets/illustrations/frown.svg";
import { IconText } from "../components/misc/IconText";
import { CtaBtn } from "../components/buttons/CtaBtn";
import { useRouter } from "next/router";

export default function Page404() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div>
        <IconText Icon={Icon} text="Página não encontrada!"></IconText>
        <CtaBtn text="Voltar à página inicial" onClick={goBack}></CtaBtn>
      </div>
    </div>
  );
}
