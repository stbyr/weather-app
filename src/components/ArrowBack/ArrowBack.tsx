import React from "react";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "../../../lib/imageLoader";

const ArrowBack = () => {
  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <a>
          <Image
            src={require("../../assets/icons/arrow-left.png")}
            alt="arrow back"
            width="42px"
            height="40px"
            loader={Loader}
            className="shadow"
          />
        </a>
      </Link>
    </S.Wrapper>
  );
};

export default ArrowBack;
