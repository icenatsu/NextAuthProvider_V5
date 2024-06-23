"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import classNames from "classnames";
import styles from "./AuthButton.module.css";
import { useModal } from "@/app/Hooks/Modal/useModal";

export function LogInButton() {
  const logIn = async () => {
    await signIn();
  };

  return (
    <button className={classNames(styles.button)} onClick={() => logIn()}>
      Connexion
    </button>
  );
}

export function LogOutButton() {
  const { Modal, ModalDiv } = useModal();
  const logOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <button
        className={classNames(styles.button)}
        onClick={() => Modal.show("Voulez-vous vous déconnecter ?")}
      >
        Se déconnecter
      </button>
      <ModalDiv
        validateButton={{ name: "Oui", onClick: async () => logOut() }}
        cancelButton={{ name: "Non" }}
      />
    </>
  );
}
