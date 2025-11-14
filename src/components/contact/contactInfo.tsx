import { Mail, MapPin, Phone } from "lucide-react";

export const ContactInfo = () => (
  <div className="space-y-4 p-4">
    <h2 className="text-2xl font-bold text-white">Contact Information</h2>
    <div className="flex items-center gap-3 rounded-lg border border-[#326744] bg-[#193322] p-4">
      <MapPin className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-white">Alamat</h3>
        <p className="text-gray-300">
          Jl. Kesehatan, Desa Rato, Sila, 84161, NTB.
        </p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-lg border border-[#326744] bg-[#193322] p-4">
      <Mail className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-white">Email</h3>
        <p className="text-gray-300">support@hubeingconnect.com</p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-lg border border-[#326744] bg-[#193322] p-4">
      <Phone className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-white">Telepon</h3>
        <p className="text-gray-300">0821 4478 5677</p>
      </div>
    </div>
  </div>
);
