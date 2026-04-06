import { BauhausButton } from "@/components/bauhaus-button";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <main>
      <Section background="yellow" withDivider={false}>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="space-y-4">
            <p className="inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
              404
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
              这个网格里没有你要找的页面
            </h1>
          </div>
          <div className="space-y-6 border-4 border-black bg-white p-6 shadow-bauhausLg sm:p-8">
            <p className="text-base font-medium leading-relaxed sm:text-lg">
              链接可能已经移动，或者这个案例还没有被编排进站点。
            </p>
            <BauhausButton href="/" variant="primary" showArrow>
              返回首页
            </BauhausButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
