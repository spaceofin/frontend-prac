import { useIsFetching } from '@tanstack/react-query';

export function Loading() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,181,6,0.8)',
        color: 'white',
        fontSize: '44px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Loading...
    </div>
  ) : (
    <></>
  );
}
