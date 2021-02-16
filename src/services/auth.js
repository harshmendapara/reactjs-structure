import { serviceMaker, methods } from "./index";

export const isValidateMe = () => serviceMaker(`/backoffice/me`, methods.GET);
