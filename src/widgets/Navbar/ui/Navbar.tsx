import { ThemeToggler } from "@shared/ui/Theme/ui/ThemeToggler";
import { FlexBox } from "@shared/ui/FlexBox/FlexBox";
import { Typography } from "@shared/ui/Typography";

export const Navbar: React.FC = () => {
    return (
        <header className="w-full py-53 px-60">
            <FlexBox justify="between" align="center">
                <Typography.Title as="h1"> TuneUp </Typography.Title>
                <FlexBox justify="center" className="gap-30">
                    <Typography.Subtitle pointer> About </Typography.Subtitle>
                    <Typography.Subtitle pointer> Login </Typography.Subtitle>

                    <ThemeToggler/>
                </FlexBox>
            </FlexBox>
        </header>
    )
}