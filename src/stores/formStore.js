import { create } from 'zustand';

const useFormStore = create((set) => ({
    isFormOpen: false,
    formData: null,
    setIsFormOpen: (isOpen) => set({ isFormOpen: isOpen }),
    setFormData: (data) => set({ formData: data }),
    resetForm: () => set({ formData: null, isFormOpen: false }),
}));

export default useFormStore;