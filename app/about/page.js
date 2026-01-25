import Image from "next/image";
import SectionTitle from "../components/SectionTitle";

export default function AboutPage() {
    return (
        <div className="space-y-4 w-full">
            <SectionTitle title="About Me" />
            <div className="flex flex-col md:flex-row fade_in gap-6">
                <div className="overflow-hidden rounded-sm">
                    <Image
                        src="/images/ab.jpeg"
                        alt="About"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                </div>
                <div className="w-full md:w-[28%] flex flex-col justify-end md:text-lg">
                    <p className="text-dark leading-relaxed">
                        I am Abd-Albaset, an architectural engineer and a graduate of Al-Baath University, known for its strong architectural engineering program. I have worked on a wide range of projects, including villa facades, villa complexes, landscapes, and distinctive retail shops, delivering results for diverse clients.

                        My experience as an assistant architect gave me solid hands-on exposure to functional architectural practices and real project execution. I was also mentored by a creative architect whose insights and guidance significantly shaped my design thinking and professional approach.
                    </p>
                </div>
            </div>
        </div>
    );
}
