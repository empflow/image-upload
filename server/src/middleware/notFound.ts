import { NotFoundErr } from "../utils/errs";

export default function notFound() {
  throw new NotFoundErr("Route not found");
}
