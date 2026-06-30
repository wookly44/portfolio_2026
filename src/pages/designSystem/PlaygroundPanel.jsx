import {FadeUp, Stagger, StaggerItem} from '@/components/ui/Motion';
import MetaPanel from './MetaPanel';

import ButtonPreview from './designPreviews/ButtonPreview';
import ModalPreview from './designPreviews/ModalPreview';
import TabsPreview from './designPreviews/TabsPreview';
import AccordionPreview from './designPreviews/AccordionPreview';
import FormPreview from './designPreviews/FormPreview';
import ThemePreview from './designPreviews/ThemePreview';
import ToastPreview from './designPreviews/ToastPreview';

const PREVIEWS = {
  button: ButtonPreview,
  modal: ModalPreview,
  tabs: TabsPreview,
  accordion: AccordionPreview,
  form: FormPreview,
  theme: ThemePreview,
  toast: ToastPreview,
};

const DOT_COLORS = ['bg-point-red', 'bg-point-yellow', 'bg-point-green'];

function PlaygroundPanel({item}) {
  const Preview = PREVIEWS[item.id];

  return (
    <FadeUp
      delay={0.2}
      className="bg-surface border border-border rounded-xl overflow-hidden shadow-card h-fit"
    >
      <div className="flex items-center gap-3 border-b border-border bg-brand-soft px-5 py-3.5">
        <div className="flex gap-1.5">
          {DOT_COLORS.map((c) => (
            <div key={c} className={`size-3 rounded-full ${c}`} />
          ))}
        </div>
        <span className="text-xs font-semibold text-text-muted">Playground — {item.name}</span>
      </div>

      <Stagger className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
        {item && (
          <>
            <MetaPanel item={item} />
            <StaggerItem className="p-5">
              <p className="panel-subtit mb-3">Live Demo</p>
              <Preview />
            </StaggerItem>
          </>
        )}
      </Stagger>
    </FadeUp>
  );
}

export default PlaygroundPanel;
