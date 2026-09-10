const MapNdFaq = () => {
  return (
    <div className="max-w-5xl p-4 mx-auto flex flex-col gap-5 w-full">
            <div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0767083608!2d-74.30915277037441!3d40.6966726870191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sfr!4v1784787712258!5m2!1sen!2sfr" style={{border:0}} loading="lazy" allowFullScreen
                referrerPolicy="no-referrer-when-downgrade" title="Google Map" className="rounded-2xl h-52 md:h-60 w-full"></iframe>

              </div>

              <div className="flex w-full items-center flex-col gap-5">

                <h1 className="text-xl md:text-2xl font-semibold uppercase mt-5">Frequently asked questions</h1>
                <div className="w-full flex flex-col gap-2 border rounded px-5 py-5 text-sm leading-10 md:leading-8 xl:leading-9 border-gray-300">

                  <div className="border-gray-300 border-b">How long does shipping take?</div>
                  <div className="border-gray-300 border-b">Can I return or exchange my order?</div>
                  <div className="border-gray-300 border-b">How can i track my order?</div>
                  <div className="border-gray-300">Do you ship internationally?</div>
                  
                </div>
              </div>
        </div>
  )
}

export default MapNdFaq