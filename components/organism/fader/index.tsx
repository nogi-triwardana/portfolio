import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode,useRef } from 'react';

type TypeProps = {
	children: ReactNode
}

export default function FadeWhenVisible({ children }: TypeProps) {
	const ref = useRef<any>(null);

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