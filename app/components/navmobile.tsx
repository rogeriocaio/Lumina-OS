"use client";
import { useState } from "react";
import { Code, History, House, Info, User } from "lucide-react";
import { Button } from "./button";

export function NavmobileButton() {
  const [active, setActive] = useState("INICIO");

  return (
    <>
      <div onClick={() => setActive("INICIO")}><Button label="INICIO" Icon={House} IsActive={active === "INICIO"}/></div>
      <div onClick={() => setActive("PROJETOS")}><Button label="PROJETOS" Icon={Code} IsActive={active === "PROJETOS"}/></div>
      <div onClick={() => setActive("SOBRE")}><Button label="SOBRE" Icon={Info} IsActive={active === "SOBRE"}/></div>
      <div onClick={() => setActive("HISTORICO")}><Button label="HISTORICO" Icon={History} IsActive={active === "HISTORICO"}/></div>
      <div onClick={() => setActive("PERFIL")}><Button label="PERFIL" Icon={User} IsActive={active === "PERFIL"}/></div>
    </>
  );
}
