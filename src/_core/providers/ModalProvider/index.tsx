// "use client";
//
// import type { Props as ModalProps } from '@widgets/Modal/types';
// import {
//     createContext,
//     type Dispatch,
//     type ReactNode,
//     type SetStateAction,
//     useContext,
//     useState,
// } from 'react';
// import { Modal } from '@widgets/Modal';
//
// export interface ModalProviderProps {
//     isOpen: boolean;
//     setIsOpen: Dispatch<SetStateAction<boolean>>;
//     openModal: (props: ModalProps & { autoReset?: boolean }) => void;
//     closeModal: () => void;
//     setIsLoadingAction: (isLoading: boolean) => void;
//     modalProps: ModalProps;
// }
//
// export const ModalContext = createContext<ModalProviderProps>({
//     isOpen: false,
//     setIsOpen: () => {},
//     openModal: () => {},
//     closeModal: () => {},
//     modalProps: {},
//     setIsLoadingAction: () => {},
// });
//
// export const useModal = (): ModalProviderProps => {
//     const context = useContext(ModalContext);
//     if (context === undefined) {
//         throw new Error('useModal must be used within a ModalProvider');
//     }
//     return context;
// };
//
// const ModalProvider = ({ children }: { children: ReactNode }) => {
//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const [modalProps, setModalProps] = useState<ModalProps>({});
//
//     const openModal = (props: ModalProps & { autoReset?: boolean }) => {
//         setModalProps(props);
//         setIsOpen(true);
//     };
//
//     const closeModal = () => {
//         setIsOpen(false);
//         const shouldReset = (modalProps as any).autoReset !== false;
//         if (shouldReset) {
//             setModalProps({});
//         }
//     };
//
//     const setIsLoadingAction = (isLoading: boolean) => {
//         setModalProps((prev: ModalProps) => ({
//             ...prev,
//             footerButtons:
//                 prev.generateFooterButtons?.(isLoading) ??
//                 prev.footerButtons ??
//                 <Button variant="outline" onClick={closeModal} disabled={isLoading}>
//                     {isLoading ? 'Загрузка...' : 'Закрыть'}
//                 </Button>,
//         }));
//     };
//
//     const handleOpenChange = (details: { open: boolean }) => {
//         if (!details.open) {
//             closeModal();
//         }
//     };
//
//     return (
//         <ModalContext.Provider
//             value={{
//                 isOpen,
//                 setIsOpen,
//                 openModal,
//                 closeModal,
//                 modalProps,
//                 setIsLoadingAction,
//             }}
//         >
//             {children}
//             <Modal
//                 {...modalProps}
//                 zIndex={1999}
//                 open={isOpen}
//                 onOpenChange={handleOpenChange}
//             />
//         </ModalContext.Provider>
//     );
// };
//
// export default ModalProvider;
