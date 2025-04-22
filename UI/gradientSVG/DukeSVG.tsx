import Svg, {
    Path,
    Stop,
    LinearGradient,
    Defs,
    type SvgProps,
} from "react-native-svg";

interface IProps extends SvgProps {}

/** When using SVG with gradients on web platform,
 *  using react-native-svg makes sure the graphics renders correctly,
 *  it is also essential to ensure no id attribute of a LinearGradient overlaps with another,
 *  even if they are located in different files
 */
const DukeSVG = (props: IProps) => {
    return (
        <Svg width="158" height="161" fill="none" viewBox="0 0 158 161" {...props}>
            <Defs>
                <LinearGradient
                    id="a"
                    x1="-1035.07"
                    x2="122.748"
                    y1="-140.716"
                    y2="614.072"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
                <LinearGradient
                    id="b"
                    x1="-4410.77"
                    x2="-4228.13"
                    y1="-23.98"
                    y2="1024.11"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
                <LinearGradient
                    id="c"
                    x1="-743.229"
                    x2="494.298"
                    y1="-243.761"
                    y2="173.437"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
                <LinearGradient
                    id="d"
                    x1="-540.562"
                    x2="1535.75"
                    y1="-89.025"
                    y2="1186.96"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
                <LinearGradient
                    id="e"
                    x1="-547.886"
                    x2="1396.4"
                    y1="-56.823"
                    y2="1202.88"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
                <LinearGradient
                    id="f"
                    x1="-14252.5"
                    x2="-1247.42"
                    y1="-1385.75"
                    y2="12169.7"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
                <LinearGradient
                    id="g"
                    x1="-11648.3"
                    x2="-1129.88"
                    y1="-1037.34"
                    y2="10507.7"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
                <LinearGradient
                    id="h"
                    x1="-12.72"
                    x2="164.65"
                    y1="51.28"
                    y2="115.84"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset=".15" stopColor="#FFCB04" />
                    <Stop offset=".26" stopColor="#F9A719" />
                    <Stop offset=".33" stopColor="#FBBA0D" />
                    <Stop offset=".41" stopColor="#FECC03" />
                    <Stop offset=".47" stopColor="#FFD300" />
                    <Stop offset=".56" stopColor="#FECE02" />
                    <Stop offset=".67" stopColor="#FCC008" />
                    <Stop offset=".78" stopColor="#F9A813" />
                    <Stop offset=".87" stopColor="#F6921E" />
                </LinearGradient>
            </Defs>
            <Path
                fill="url(#a)"
                d="M114.36 110.23c-4.74 12.3-14.18 31.98-29.1 41.86-20.89 13.84 15.29.31 19.32-.9.24-.07.45-.22.6-.43 1.32-1.81 7.64-11.7 11.44-39.87.2-1.46-1.74-2.02-2.26-.66"
            />
            <Path
                fill="url(#b)"
                d="M118.29 114.17c-1.39 12.3-4.75 29.83-9.17 38.52-6.28 12.35 4.58 1.32 5.76.11.07-.07.13-.22.17-.43.39-1.81 2.78-9.37 3.9-37.54.06-1.46-.51-2.02-.66-.66"
            />
            <Path
                fill="url(#c)"
                d="M110.98 112.14c.53-.95.37-1.51-.2-.68-16.96 24.53-38.55 35.21-44.6 38.73-1.55.9-1.4 3.77.22 4.42.3.12 1.95.49 4.43-.48 2.21-.86 20.86-7.13 40.15-42z"
            />
            <Path
                fill="url(#d)"
                d="M57.91 57.77s1.61-6.04-3.33-9.79-4.79-11.67-4.79-11.67c-12.86 25.43 8.12 21.46 8.12 21.46"
            />
            <Path
                fill="url(#e)"
                d="M58.96 47s3.99-4.37 2.16-8.71 1.99-10.61 1.99-10.61c-21.18 16.73-4.15 19.31-4.15 19.31z"
            />
            <Path
                fill="url(#f)"
                d="M124.41 47.98c-4.94 3.75-3.33 9.79-3.33 9.79s20.98 3.96 8.12-21.46c0 0 .15 7.93-4.79 11.67"
            />
            <Path
                fill="url(#g)"
                d="M117.87 38.29c-1.83 4.34 2.16 8.71 2.16 8.71s17.04-2.58-4.15-19.31c0 0 3.81 6.27 1.99 10.61z"
            />
            <Path
                fill="url(#h)"
                d="M156.87 122.3v-.23c-.91-2.82-2.52-5.07-4.85-6.66l-11.78-7.44s-.03-.02-.05-.03l-9.13-7.09a.6.6 0 0 1-.23-.36c-1.75-8.31-3.45-17-6.03-25.38l-1.25-4.83c3.82.99 8.48-1.39 12.61-13.62 0 0-5.41 5.08-11.36 3.33-1.51-.44-2.83-.45-3.97-.2-3.25-9.4-4.66-12.72-7.28-18.59l-4.34-9.7c-4.73-10.03-8.27-15.22-13.2-24.15-.82-1.48-1.72-2.92-2.71-4.3l-1.42-1.99c-1.01-1.47-4.04-1.48-4.95.51L85.88 3.5C80.1 14.83 74.67 23.02 69.34 34.76l-3.61 8.21c-2.25 5.11-4.18 10.34-5.8 15.68l-.47 1.56c-1.39-.58-3.14-.83-5.26-.21-5.95 1.75-11.36-3.33-11.36-3.33 4.52 13.39 9.67 14.97 13.67 13.26l-1.6 5.29c-1.04 2.98-2.04 5.94-2.99 8.87-.03.08-.07.16-.13.22-2.38 2.6-4.01 5.01-5.44 7.82-.86 1.68-1.57 4.77-1.93 6.79-.17.97-.25 2.11-.25 3.21l-23.07 14.7-1.39-11.41c1.87-.62 2.76-1.11 4.41-2.12l.64-.91a10.3 10.3 0 0 0 1.82-6.93c-.65-6.46 4.75-9.55.23-13.26-.72-.59-1.56-1.16-2.48-1.69-.12-4.5-.3-12.04-.22-14.52.12-3.63.24-8.59-3.38-8.55-2.28.03-3.06 6.13-3.2 9.09-.25-1.63-.59-8.73-3.5-8.51-.67.05-3.72 0-2.65 10.06.42 3.94-.15 6.82-.48 9.08-.08.28-.15.38-.2.4l-7.77 6.18C1.39 85.1-.55 87.43.16 90.21l2.82 11.03c1.13 2.52 1.55 3.05 2.52 4.03 1.08 1.08 2.34 1.14 3.81 1.31.26.03.52.03.78.06l1.35 16.09c-.11 2.83.48 4.47 2.01 5.67 1.54.8 3.06.72 5.39-.34l24.86-14.59c-1.95 8.66-6.42 29.91-7.12 33.57 0 .02 0 .04-.01.06l-2.76 9.26c-.19.63.61 1.09 1.06.6l6.67-7.32c.09-.1.14-.22.16-.35.62-5.76 4.22-26.61 5.42-32.95.1-.54.8-.69 1.12-.24.16.24.34.47.51.71.63.85 1.31 1.7 2.04 2.53.4.46.8.9 1.29 1.36 1.08 1.01 2.27 1.91 3.56 2.82 4.9 3.38 10.41 5.25 16.49 5.54 2.03.09 4.12.02 6.27-.24 8.61-1.01 15.62-4.51 21.26-10.37.01-.01.02-.02.03-.04l.87-1.03 1.47-1.76.03-.03.47-.64s.02-.03.03-.04c.89-1.45 1.77-2.81 2.46-4.27.3-.56.49-1.24.79-1.8.7-1.69 1.09-3.39 1.39-5.2v-.34c.07-.37.09-.79.12-1.23a.62.62 0 0 1 .74-.56c.6.12 1.25.29 1.94.5.36.12.79.28 1.17.42.64.22 1.29.45 2 .74.13.05.23.08.36.13 1.79.75 3.85 1.72 6 2.88.12.07.22.11.33.17 2.07 1.13 3.86 2.03 5.24 2.82 1.32.68 1.86 1.21 2.31 1.56.12.09.2.22.22.37.9 4.71 4.55 26.29 5.19 30.23l1.93 12.64c.01.13.07.26.16.35l5.59 6.02c.3.33.85.24 1.02-.17.66-1.5.82-3.9.84-4.31 0-.04 0-.08.02-.12 2.92-11.13 4.7-15.94 12.46-25.18h.1c2.02-2.26 2.62-4.97 1.92-8.24zm-76.96 1.76c-15.04 2.65-29.04-5.43-31.26-18.05s8.17-24.99 23.22-27.63c15.04-2.65 29.04 5.43 31.26 18.05 2.22 12.61-8.17 24.99-23.22 27.63m68.38.69c-.07.1-.16.17-.27.22l-8.73 3.84c-.06.03-.12.04-.19.05-1.15.14-2.24-.06-3.25-.57a.63.63 0 0 1-.33-.47c-.68-5.1-1.34-10-1.71-12.5-.08-.54.53-.91.97-.6l13.49 9.49.2.23-.2.3z"
            />
        </Svg>
    );
};

export default DukeSVG;