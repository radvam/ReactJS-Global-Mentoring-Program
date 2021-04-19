import React, { FC } from "react";

import { NotFoundHeader } from "../../components/not-found-page/not-found-header/NotFoundHeader";
import { Footer } from "../../components/main-page/footer/Footer";
import { NotFoundContent } from "../../components/not-found-page/not-found-content/NotFoundContent";

import { NotFoundPageWrapper } from "./NotFoundPage.style";

export const NotFoundPage: FC = (): React.ReactElement => (
  <NotFoundPageWrapper>
    <NotFoundHeader />
    <NotFoundContent />
    <Footer />
  </NotFoundPageWrapper>
);
