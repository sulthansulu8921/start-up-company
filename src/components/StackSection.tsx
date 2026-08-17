/**
 * StackSection — wraps any section so it sticks to the top while the
 * next section slides up from underneath, producing the Apple-style
 * "card stack" scroll transition. Pure CSS sticky, zero JS, 60 FPS.
 *
 * Usage:
 *   <StackSection index={0}><MySection /></StackSection>
 *   <StackSection index={1}><NextSection /></StackSection>
 *
 * index controls the z-index (higher = on top) and the top-radius
 * is applied automatically so each layer looks like a lifted card.
 */

interface StackSectionProps {
    children: React.ReactNode;
    index: number;        // 0-based; controls z-index stacking order
    className?: string;
}

export default function StackSection({ children, index, className = "" }: StackSectionProps) {
    return (
        <div
            className={`sticky top-0 overflow-hidden ${className}`}
            style={{
                zIndex: 30 + index,
                // Each successive card peeks out slightly from behind the previous
                borderRadius: "2rem 2rem 0 0",
                // Crisp shadow so the card boundary is visible
                boxShadow: "0 -8px 40px rgba(0,0,0,0.08)",
            }}
        >
            {children}
        </div>
    );
}
