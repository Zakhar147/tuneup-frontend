import { useAuthStore } from "@entities/User";
import { useLogout } from "@features/logout";

import { ThemeToggler } from "@shared/ui/Theme";
import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";
import { Link } from "@shared/ui/Link";

export const Navbar: React.FC = () => {
  const { auth } = useAuthStore();
  const { onLogout } = useLogout();

  return (
    <header
      className="w-full py-[30px] px-[60px] fixed top-0 left-0 z-50 backdrop-blur-md bg-transparent"
      style={{ boxShadow: "0 2px 28px 0 rgba(0, 0, 0, 0.05)" }}
    >
      <FlexBox justify="between" align="center">
        <Typography className="text-[32px]" as="h1">
          <Link
            href={"/"}
            hrefText={"TuneUp"}
            colorClassName="text-light-textMain dark:text-dark-textMain"
          />
        </Typography>
        <FlexBox justify="center" className="gap-[30px]">
          {!auth ? (
            <>
              <Typography className="text-[16px] font-medium" pointer>
                About
              </Typography>
              <Typography className="text-[16px] font-medium" pointer>
                <Link href={"/login"} hrefText={"Login"} />
              </Typography>
            </>
          ) : (
            <>
              <Typography className="text-[16px] font-medium" pointer>
                Songs
              </Typography>

              <Typography className="text-[16px] font-medium" pointer>
                Add song
              </Typography>

              <div onClick={onLogout}>
                <Typography
                  className="text-[16px] font-medium text-red-600 dark:text-red-500 cursor-pointer"
                  pointer
                >
                  Logout
                </Typography>
              </div>
            </>
          )}

          <ThemeToggler />
        </FlexBox>
      </FlexBox>
    </header>
  );
};
