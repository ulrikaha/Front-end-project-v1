
//Section Header component for the home page

type SectionHeaderProps = {
    text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
    return (
        <h2 className="text-4xl text-center font-custom text-black mt-12 mb-12">
            {text}
        </h2>
    );
};
export default SectionHeader;

