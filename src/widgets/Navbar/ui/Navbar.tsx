import { ThemeToggler } from "@shared/ui/Theme";
import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";

export const Navbar: React.FC = () => {
  //  TODO: Сделать так чтобы navbar был fixed

  return (
    <header className="w-full py-[30px] px-[60px]">
      <FlexBox justify="between" align="center">
        <Typography title className="text-[32px]" as="h1">
          TuneUp
        </Typography>
        <FlexBox justify="center" className="gap-[30px]">
          <Typography className="text-[16px] font-medium" pointer>
            About
          </Typography>
          <Typography className="text-[16px] font-medium" pointer>
            Login
          </Typography>
          <ThemeToggler />
        </FlexBox>
      </FlexBox>
    </header>
  );
};
