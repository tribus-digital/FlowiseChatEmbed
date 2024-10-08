type Props = {
  pageContent: string;
  metadata: {
    title?: string;
  };
  onSourceClick?: () => void;
};
export const SourceBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start mb-2 items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => {
        props.onSourceClick?.();
      }}
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: '100%',
          'font-size': '13px',
          'border-radius': '15px',
          cursor: 'pointer',
          overflow: 'hidden',
          'white-space': 'normal',
        }}
      >
        {props.metadata.title || props.pageContent}
      </span>
    </div>
  </>
);
