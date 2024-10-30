import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent, AnimatePresence } from "framer-motion";

export const Timeline = ({ data, containerRef }) => {
    console.log('Timeline component rendering');
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    const [isContainerReady, setIsContainerReady] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 20%", "end 80%"], // Changed offset to better handle content length
        container: isContainerReady ? containerRef : undefined,
    });

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                const contentHeight = ref.current.scrollHeight;
                setHeight(contentHeight);
            }
        };

        const resizeObserver = new ResizeObserver(updateHeight);
        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                resizeObserver.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setIsContainerReady(true);
        }

        console.log("isContainerReady", isContainerReady);
    }, [containerRef]);

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log('Scroll changed:', latest);
    });


    return (
        <div className="relative w-full min-h-screen">
            <div
                className="relative  w-full font-sans md:px-10"
                ref={ref}>

                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
                </div>

                <div className="relative max-w-7xl h-full mx-auto pb-20">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                            <div
                                className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
                                <div
                                    className="hidden  md-block h-10 absolute left-0 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                    <div
                                        className="hidden md:block h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                                </div>
                                <motion.h3
                                    className="hidden md:block text-xl md:pl-20 md:text-2xl md:text-3xl  font-bold text-slate-500 "
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{
                                        opacity: 1,
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        y: 0
                                    }}
                                    viewport={{ amount: 0.3 }}
                                    transition={{ duration: 1 }}

                                >
                                    {item.title}
                                </motion.h3>
                            </div>

                            <div className="relative bg-slate-500/20 px-2 md:pl-20  md:pl-4 w-full">
                                <AnimatePresence key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ amount: 0.2 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* <h2
                                            className="md:hidden block text-xl text-left font-bold text-neutral-500 dark:text-neutral-500">
                                            {item.title}
                                        </h2> */}
                                        {item.content}{" "}
                                    </motion.div>
                                </AnimatePresence>

                            </div>
                        </div>
                    ))}
                    {scrollYProgress && (
                        <motion.div
                            style={{
                                height: heightTransform,
                                opacity: opacityTransform,
                            }}
                            className="absolute inset-x-0 top-0 w-[4px] md:w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
                    )}

                </div>
            </div>

        </div>

    );
};
