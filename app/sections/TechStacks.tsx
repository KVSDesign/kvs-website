export const TechStacks = () => {
    return (
        <div className="min-h-screen p-6 flex">
            <div className="flex-1">
                <div className="grid grid-cols-2 mb-[52px]">
                    <h3 className="uppercase">{`{The Work We Do}`}</h3>
                    <div>
                        <ul className="uppercase flex flex-col gap-2">
                            <li>{`{Web design}`}</li>
                            <li>{`{Digital Product Design}`}</li>
                            <li>{`{CRO aka Conversion Rate Optimisation}`}</li>
                            <li>{`{Motion & interaction design}`}</li>
                            <li>{`{frontend development}`}</li>
                            <li>{`{Backend development}`}</li>
                            <li>{`{web apps}`}</li>
                            <li>{`{Native apps}`}</li>
                            <li>{`{Chrome extensions}`}</li>
                            <li>{`{AI Apps}`}</li>
                            <li>{`{AI Agents}`}</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-[170px]">
                    <h3 className="uppercase">{`{Those Who Chose Us}`}</h3>
                    <div>
                        <ul className="uppercase flex flex-col gap-2">
                            <li>{`{Riport Applications}`}</li>
                            <li>{`{robert ray}`}</li>
                            <li>{`{Expian}`}</li>
                            <li>{`{Givell}`}</li>
                            <li>{`{Chaptr}`}</li>
                            <li>{`{Alteam}`}</li>
                            <li>{`{Solo60}`}</li>
                            <li>{`{Glide UK}`}</li>
                            <li>{`{Paired}`}</li>
                            <li>{`{Designbundles}`}</li>
                            <li>{`{maison21g}`}</li>
                            <li>{`{opportuni}`}</li>
                            <li>{`{hackajob}`}</li>
                            <li>{`{&merge}`}<sup className="align-super normal-case">Our product:)</sup></li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid grid-cols-2 uppercase">
                    <p>{`{Kirilo visual solutions kft}`}</p>
                    <p className="text-end">{`{Budapest, Hungary}`}</p>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <p className="text-end font-semibold mb-[260px]">CREATE WHAT OTHERS WON’T DARE TO</p>
                <div>
                    <img src="/assets/images/logo-lg.png" />
                </div>
            </div>
        </div>
    )
};