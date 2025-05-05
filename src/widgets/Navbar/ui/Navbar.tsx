import { ThemeToggler } from "@shared/ui/Theme";
import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";
import { Link } from "@shared/ui/Link";

export const Navbar: React.FC = () => {
  //  TODO: Сделать так чтобы navbar был fixed

  return (
    <header className="w-full py-[30px] px-[60px]">
      <FlexBox justify="between" align="center">
        <Typography className="text-[32px]" as="h1">
          <Link href={"/"} hrefText={"TuneUp"} colorClassName="text-light-textMain dark:text-dark-textMain"/>
        </Typography>
        <FlexBox justify="center" className="gap-[30px]">
          {!false ? (
            <>
              <Typography className="text-[16px] font-medium" pointer>
                About
              </Typography>
              <Typography className="text-[16px] font-medium" pointer>
                Login
              </Typography>
            </>
          ) : (
            <>
              <Typography className="text-[16px] font-medium" pointer>
                Songs
              </Typography>
              <Typography className="text-[16px] font-medium" pointer>
                Artists
              </Typography>
              <Typography className="text-[16px] font-medium" pointer>
                Albums
              </Typography>
              <Typography className="text-[16px] font-medium" pointer>
                Add song
              </Typography>
            </>
          )}

          <ThemeToggler />
        </FlexBox>
      </FlexBox>
    </header>
  );
};
