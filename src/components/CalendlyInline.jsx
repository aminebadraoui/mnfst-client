import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalendlyInline = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                styles: {
                    branding: {
                        brandColor: "#8B5CF6"
                    }
                },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <div id="book-call" className="w-full bg-gray-950 py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-4">
                    <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                        BOOK A CALL
                    </span>
                </div>

                <h2 className="text-5xl font-bold text-white mb-6">
                    Schedule your free consultation
                </h2>

                <p className="text-xl text-gray-400 max-w-3xl mb-12">
                    Book a 30-minute call to discuss your needs and see how we can help automate your business.
                </p>

                <div className="max-w-4xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                    <Cal
                        calLink="mnfst-ai/discovery-call"
                        style={{
                            width: "100%",
                            height: "700px",
                            overflow: "scroll"
                        }}
                        config={{
                            layout: "month_view"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendlyInline;