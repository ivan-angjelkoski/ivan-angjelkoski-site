// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

type Data = {
	name: string;
};
const marktest = `
# Patria unda caelestes illo efficiet similes

## Umeri que sic Polyphemon latus loquuntur iuvabat

Lorem markdownum ferat pedum sub: effudit Midae foret meus habebat. Troiana non
nocent *truncaeque* faber semesarumque quam Minoa undis intulit, placidis
strictumque?

- Sunto latebris zephyris subeant ardent erat fecere
- Quo phocen
- Inque viro orbi sibilat fatigatum mutatus terebat
- Aptae persequar capillos pervenit ense sensit Athamanas
- Instimulat flavaque Alcides

## Sunt eadem harundine genus passa aurigam

Viros premebat filo sic venerat satis neque sapiente velamine malorum sagittas,
illi lacrimae terra grator orbem amictu. Rota oculos aures tellus possumus
tamen; suae malas, placeas.

    if (dialog(xhtml_checksum) > apple_tweet) {
        tebibyte_boot_fi = -1;
    } else {
        ssdModemAlert += lpi_middleware / pharming_southbridge;
    }
    drive_copy.flops_file_dimm(gopher, bootClobMatrix,
            standbyVirtualization.matrix(98, 4, 60));
    newsgroup_pmu_boot.chipsetOutput += node_zero(requirementsSystem,
            userCdfsRoot + compile);

## Pedum se in visum

Neque excita mitis; fuit pedem Dies iuvencae vires hedera, arcus et aemula.
Iunctus quo catenis, consuetissima obruta ut mox Telamon, prima praemia. Tura
hic iuvenca matrona **undis mille**, nostro amando namque, clavigeri recessit
crimen.

## Strata certe

Daedalon vulnus membra, *mens fit* conplexa forti mentem sed vim vipereasque
tibi dederant Thebas, inplevi et *laberis*. Novercam foedera ferro non natalis
equorum pugnacem cognovit aliasque **dolor**, et. Superator temptarunt arbore
iamque rursusque gentes, nec tulit olim. Onus abluit at sacra iuvenale
ingratasque *somno* solumque circumdata neque exteriusque, vincta *aut corpora*,
reus flavus aurora. Sed Cecrope tribus.

> Adhuc sacra vultus obstrepuere solacia quicquam deponit conciliumque sustulit
> in inminet. Agnus corniger Lucifer contemptuque **sunt oracla** me sedem per
> et adhibendus at quid virgine. Toto non in quae, annis ira: talia **quodam**.
> Precatur fractus paterque vultus Aethiopasque sorbere rogato, qua sex
> Thisbaeas, **quo**.

Silenum cum, et postquam aut sororum **deos lacrimis** Phaeocomes annis pariter
equam cum, iuvabat optetis patriae. Auratam vota pertulit Ityosque iudice
coeperunt ingens iustis omnis decoris Teucri relinquit Cytherea nomen aranea.
Nempe postquam: coniugium duorum paravi.
`;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = await prisma.post.create({
		data: {
			description: 'New Post',
			title: 'Testing Markdown 2',
			content: marktest,
			image:
				'https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424',
			authorId: '1991258a-c16b-4961-89b1-80b6d727e49f',
			published: true,
		},
	});
	res.status(200).json(data);
}
