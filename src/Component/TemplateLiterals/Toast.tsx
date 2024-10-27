type HorizonPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

// Exclude 'center-center' from possible positions
type ToastPosition = Exclude<`${HorizonPosition}-${VerticalPosition}`, 'center-center'>;

type ToastProps = {
    position: ToastPosition;
};

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>
            Toast Notification Position - {position}
        </div>
    );
};
