import styles from "./page.module.css";
import { LogInButton, LogOutButton } from "./Components/Auth/AuthButton/AuthButton";


export default function Home() {
  return (
    <main className={styles.main}>
     <LogInButton/>
     <LogOutButton/>
    </main>
  );
}
