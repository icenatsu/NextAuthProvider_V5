import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth(async (req) => {
  console.log("verif middleware");
  const { nextUrl } = req;
  console.log(nextUrl);
  const session = await auth();
  console.log(!!session?.user);

  if (req.auth && req.cookies) {
    return NextResponse.next();
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
});

export const config = {
  matcher: ["/api/board", "/dashboard/:path*"],
};
