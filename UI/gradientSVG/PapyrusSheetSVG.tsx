import Svg, {
    Path,
    G,
    Stop,
    LinearGradient,
    ClipPath,
    Defs,
    type SvgProps,
} from "react-native-svg";

interface IProps extends SvgProps {}

/** When using SVG with gradients on web platform,
 *  using react-native-svg makes sure the graphics renders correctly,
 *  it is also essential to ensure no id attribute of a LinearGradient overlaps with another,
 *  even if they are located in different files
 */
const PapyrusSheetSVG = (props: IProps) => {
    return (
        <Svg width="276" height="329" fill="none" viewBox="0 0 276 329" {...props}>
            <G clipPath="url(#sheet0_linear)">
                <Path
                    fill="url(#sheet0_linear)"
                    stroke="url(#sheet1_linear)"
                    d="M274.884 449.442V225.24l-4.353-4.84 4.874-4.271V157.58l-8.696-3.87 8.696-4.271V71.117l-11.138-4.65 11.138-8.91v-57H8.911L1.405 9.302v57.344l8.546 7.963-8.546 9.49v49.037l8.696 7.773-8.696 4.695v49.036l7.135 6.646-7.135 8.721v58.928l8.696 4.194-8.696 3.78v172.534z"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="sheet0_linear"
                    x1="138.405"
                    x2="138.405"
                    y1=".558"
                    y2="328.442"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7F3F1" />
                    <Stop offset=".385" stopColor="#F1DBCC" />
                    <Stop offset=".793" stopColor="#ECC7AD" />
                </LinearGradient>
                <LinearGradient
                    id="sheet1_linear"
                    x1="138.405"
                    x2="138"
                    y1=".558"
                    y2="328"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7F3F1" />
                    <Stop offset="1" stopColor="#DBB89F" />
                </LinearGradient>
                <ClipPath>
                    <Path fill="none" d="M.905 0h275v329h-275z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default PapyrusSheetSVG;
