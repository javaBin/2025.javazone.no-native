import Svg, {
    Path,
    G,
    Stop,
    LinearGradient,
    Defs,
    type SvgProps,
} from "react-native-svg";

interface IProps extends SvgProps {}

const PapyrusRollSVG = (props: IProps) => {
    return (
        <Svg
            width={288}
            height={40}
            viewBox="0 0 288 40"
            fill="none"
            {...props}
        >
            <Defs>
                <LinearGradient
                    id="roll0_linear"
                    x1="143.98"
                    y1="21"
                    x2="144.234"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#ECD5C5" />
                    <Stop offset="1" stopColor="#C29A7D" />
                </LinearGradient>

                <LinearGradient
                    id="roll1_linear"
                    x1="-6.665"
                    y1="12.003"
                    x2="-3.224"
                    y2="50.774"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0.13" stopColor="#967E6C" />
                    <Stop offset="0.81" stopColor="#F8E3D3" />
                </LinearGradient>

                <LinearGradient
                    id="roll2_linear"
                    x1="290.581"
                    y1="17.396"
                    x2="286.507"
                    y2="-20.542"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0.31" stopColor="#958171" />
                    <Stop offset="0.77" stopColor="#837263" />
                </LinearGradient>

                <LinearGradient
                    id="roll3_linear"
                    x1="-27.039"
                    y1="5.152"
                    x2="-26.039"
                    y2="40.238"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#5E544C" />
                    <Stop offset="1" stopColor="#8F8278" />
                </LinearGradient>
            </Defs>

            {/* Wrap all paths in a group with a vertical scale factor of 40/41 */}
            <G transform="scale(1,0.9756097561)">
                <Path
                    fill="url(#roll0_linear)"
                    d="M9.053 40.5h270.396c4.728 0 8.551-8.955 8.551-20
             0-.99-.03-1.951-.091-2.901-.09-1.431-4.406-2.972-4.406-2.972s3.33-4.342
             2.898-5.743C284.851 3.812 282.306.5 279.439.5H9.053"
                />
                <Path
                    fill="url(#roll1_linear)"
                    d="M17.613 20.5c0 2.451-.191 4.792-.533 6.963-.171 1.1
             3.561 4.142 3.561 4.142s-4.768 1.04-5.1 1.941c-1.57 4.252-3.893 6.944-6.478
             6.944-4.728.01-8.56-8.945-8.56-19.99S4.334.5 9.052.5c4.717 0 8.55 8.955
             8.55 20z"
                />
                <Path
                    fill="url(#roll2_linear)"
                    d="M14.696 23.461c-.553 8.705-3.46 15.788-6.89 15.788-3.431 0-6.932-7.063-6.932-15.788
             0-8.724 3.823-19.269 7.243-19.269 1.58 0 2.726 3.012 4.074 5.663.342.67
             3.179 2.581 3.179 2.581s-1.73 2.041-1.157 4.232c.262 2.101.654 4.152.483
             6.804z"
                />
                <Path
                    fill="url(#roll3_linear)"
                    d="M12.03 24.882c-.875 6.804-1.911 10.075-4.245 10.075s-3.672-3.452-4.547-7.314
             C1.74 21.06 5.451 9.546 7.785 9.546s5.15 8.304 4.245 15.347z"
                />
                <Path
                    fill="#AB917D"
                    d="M3.5 27.914s7.072.14 8.067.1c0 0-.593 6.823-3.44 6.933S3.771
             30.645 3.5 27.914"
                />
            </G>
        </Svg>
    );
};

export default PapyrusRollSVG;