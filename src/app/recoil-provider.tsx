"use client";

import { RecoilRoot } from "recoil";

export function RecoilProvider({ children }: any) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
