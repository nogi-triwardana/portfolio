import React, { useRef, ReactNode } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { LayoutContext } from 'src/static/context';

type TypeProps = {
	children: ReactNode
}

export default function FadeWhenVisible({ children }: TypeProps) {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key="EXPERIENCE"
				transition={{ duration: 1.5, ease: "easeOut" }}
				ref={ref}
				variants={{
					visible: { opacity: 1, scale: 1, y: 0 },
					hidden: {
						opacity: 0,
						scale: 1,
						y: 100,
					}
				}}
				initial="hidden"
				viewport={{ once: true }}
				whileInView="visible"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}