import {HomeIcon} from '@/components/ui/Icons';
import {LIGHTHOUSE} from '@/data/contact';
import {FadeUp} from '@/components/ui/Motion';
import LighthouseGauge from '@/components/common/LighthouseGauge';

function Lighthouse() {
  return (
    <FadeUp
      delay={0.25}
      className="flex justify-between flex-col md:flex-row gap-5 border border-border-inverse rounded-t-2xl bg-surface-soft p-6 md:p-10"
    >
      <div>
        <p className="flex items-center gap-2 text-text-inverse text-lg font-bold mb-2">
          <HomeIcon />
          Lighthouse Score
        </p>
        <span className="text-text-connect text-sm">
          Chrome Lighthouse 기준 측정된 웹사이트 품질 지표입니다.
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {LIGHTHOUSE.map(({score, label}) => (
          <LighthouseGauge key={label} score={score} label={label} />
        ))}
      </div>
    </FadeUp>
  );
}

export default Lighthouse;
