export const Footer = () => {
  return (
    <section className="bg-blue-500 text-white p-4 flex justify-end">
      <div className="grid grid-cols-2 gap-8 pr-10">
        <div className="pl-10">
          <h3 className="font-bold mb-4">CONTACTS</h3>
          <p>Piazza indipendenza 8a, - 50127 Florence, Italy</p>
          <p>Address of the center's representative office: 3rd floor, block B, No. 668 Hengfeng Road, Jing'an District, Shanghai, China</p>
          <p>Phone: +39 3776509887</p>
          <p>Fiscal Code: 82147022180</p>
        </div>
        <div className="pl-10">
          <h3 className="font-bold mb-4">LINK</h3>
          <p>UN (United Nations)</p>
          <p>UNESCO (United Nations Educational, Scientific and Cultural Organization)</p>
          <p>Centro Di Ricerca SullEducazione Dei Giovani Per LUNESCO</p>
          <p>ILS LEDA (International Links and Services for Local Economic Development Agencies)</p>
        </div>
      </div>
    </section>
  );
}
