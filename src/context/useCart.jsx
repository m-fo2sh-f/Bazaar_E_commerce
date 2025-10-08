import { useContext } from 'react';
import { CartContext } from './Form'; // تأكد من أن المسار صحيح حسب مكان ملف Form.jsx

export const useCart = () => useContext(CartContext);