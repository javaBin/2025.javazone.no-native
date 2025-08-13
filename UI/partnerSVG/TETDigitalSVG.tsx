import Svg, { Text, TSpan, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {
    fill?: string;
}

const TETDigitalSVG = (props: IProps) => {
    const fillColor = props.fill || "#403532";

    return (
        <Svg
            viewBox="0 0 150 30"
            width={props.width || 150}
            height={props.height || 50}
            {...props}
        >
            <Text
                fill={fillColor}
                fontSize="15"
                fontWeight="700"
                fontFamily="Roboto, Arial, sans-serif"
                x="5"
                y="20"
                strokeWidth="0"
            >
                <TSpan y="20" fontWeight="700" strokeWidth="0">
                    TET DIGITAL AS
                </TSpan>
            </Text>
        </Svg>
    );
};

export default TETDigitalSVG;
