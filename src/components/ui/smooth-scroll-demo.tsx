import SmoothScrollHero  from "@/components/ui/smooth-scroll-hero";

const DemoOne = () => {
  return (
    <div className="relative min-h-screen">
				<SmoothScrollHero
					scrollHeight={1500}
					desktopImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125&auto=format&fit=crop"
					mobileImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
					initialClipPercentage={20}
					finalClipPercentage={80}
				/>
			</div>
  );
};

export { DemoOne };