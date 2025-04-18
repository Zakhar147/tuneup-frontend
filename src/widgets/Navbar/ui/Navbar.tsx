import { ThemeToggler } from "@features/theme/ui/ThemeToggler";
import { FlexBox } from "@shared/ui/FlexBox/FlexBox";
import { Typography } from "@shared/ui/Typography";

export const Navbar: React.FC = () => {
    return (
        <header className="w-full py-53 px-60">
            <FlexBox justify="between" align="center">
                <Typography.Title> TuneUp </Typography.Title>

                <ThemeToggler/>
            </FlexBox>
        </header>
    )
}