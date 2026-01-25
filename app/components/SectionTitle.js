import { italiana } from '../fonts'
function SectionTitle({ title }) {
    return (
        <h2 className={`${italiana.className} text-[clamp(1.6rem,4vw,2.5rem)] text-[#33383B] uppercase`}>{title}</h2>
    )
}

export default SectionTitle