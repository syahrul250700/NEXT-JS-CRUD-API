import { NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request) {
  const res = NextResponse.next();
  return res;

  // const isLogin = true; //kalau islogin = false  maka akan di redirect ke halaman login kalau islogin = true  maka tidak akan diredirect lag
  // if (isLogin) {
  //   return NextResponse.next(); // Pass control to the Next.js request handler
  // } else {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}
export default withAuth(mainMiddleware, ["/profile"]);

// export const config = {
//   matcher: ["/", "/products", "/about", "/help", "/setting"],
// };
