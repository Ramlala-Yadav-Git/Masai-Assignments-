import { CustomSideBar } from "./CustomSideBar"
import styled from "styled-components"

const Wrapper = styled.div`
border:1px solid gray;
width:250px;
padding:10px;
margin:10px;

& > div{
display:flex;
margin:10px;
justify-content:flex-start;
padding:3px;
position:relative;

}
& > div > h3{
    margin:10px;
    font-weight:normal;
}
 p{
       border-bottom:1px solid gray;

}
& > div img{
width:30px;
height:30px;
border-radius:50%;
margin:10px;
}

`

export function Drawer() {


    return (
        <>

            <Wrapper>

                <CustomSideBar label={"Inbox"} icon={"https://cdn.iconscout.com/icon/free/png-256/move-to-inbox-1781817-1518244.png"} />
                <CustomSideBar label={"Starred"} icon={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUTEhIPEhIVEA8VFRgQDxAPEBUQFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NDhAQGiwZFRk3LSs3LSsrKysrKysrKysrKysrKy0rKysrKysrKysrKysrKysrKysrKysrKysrKysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBwYIBQT/xABOEAABAwIDBAcDAxAIBgMAAAABAAIDBBEhMUEFBxJRBhMiYXGBsTKRoRQj0ggXJEJTVGNydJKUosHR4fAVMzVDUrKzwkRic4OTo2SCw//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDcUIUHm2SCRKEmZKSBAoJUJDY4Z8k4scdUEkApquU2x19UEyUKERvjr6KxAgUEqMvPVRjNzjnyQWBAKajJlyQSJSCrY65x9ytQK6ai8YYqtjrnHy70FoKLppEIGkCqQ++GnPmr0CJTQVRx6Xwvn+xBcCglACaAQq+L3eisCAQhCBEoaEEpoKngjEeYTdKLYYk5JyPt3nRViMtxz5/wQWRsticSk9pzGeo5qbXXFwk99kEeuFr/AA1uiNmpz9FDqz7WvJWsfcIIyM1GfqgTC1/hrdSe8AYqnqye1roEE2NJNz5DkpSMviMCiN9/HVSc6wuUEGy4Y4EZpNbxG5y0H7VAsLscuX8VbHJfA4EICRl/HRJkmhwIUyVSW8eOQ0QSA4sT7OnepvZcKMb9DgVYgrY+2Ds+fNR9r8X1ScOPw9VKN1uyc9ORQTc0EWUGusbHyKtVLu1gMtT+5AyeI2GWp/YFPhFraKDDw4HyKtQVA8JsctDy7ihzrmw8zyQ837I8zySb2cDlof3oLWtsLJAWUkroGhCEAqnu4cvcrCUmt96CMTdcyVYqiOHEZajknJMGtuThZBGTsm41zCcQv2jifRcjV7ytlxOPHVNe7L5mOSZo7rsBX5PrsbKBu2eXHMfJagf7UHfKmUW7Q93NcZ9drZX3aX9FqPoqob2NlXu6eXuHyWosP1UHcRDi7R8hyVy4F29jZV7ieW+v2LUWP6qt+u1sr7tL+i1H0UHaTNt2hgR8VGPtG500XEHexsontTy4ZD5LUH/ah+9jZN7ieW/5LUY/qoO+VcrNciNVxI3tbK1ml/Rag/7VB29jZROM8thp8lqDfx7KDtWHiOOmnNfoXBSb19knETygj/4tR9FTG9rZVsZpf0WoP+1B28jL9xGqqa4uwOXquKk3sbKJsZ5QPyWox/VQ/evsk/38otl9i1H0UHegKL2XC4Zu9rZVsZpf0Wo+ioyb2dlHDr5QNfsWov8A5UHah5PZv581e0WyXBu3r7Itbrpe77FqPoqTN7WyrYzy+PyWo+ig7pzbixVHGfZvrn/Oq4uTezsrSeUd/wAlqPThVtLvP2S/sioLe+SGaMePE5tkHasbYWCZF1+ajq2vY1zXNexwBY9pu1zTlYq578bDP0QR4rYX/grWhJrABZAwQSQhCBEpoVbncPgghWVTIo3SPIaxrXOcTkGtFyfcuR6FdO6baDntYDHI0vtG8jidDfCRnPC1xmLr8e+irdHsl4BsZpoYjb/ASXuHmI7HxWA0VZJDI2WJ7o5GODmuabEEIrWd6e7j2q2iZcG7pomj3yRj1b5hY+AvRW7rp4yvj4H8LKpje2zJrx90j7ubdPBcpvQ3cmzq2iZgbumhYPMyRj4lvmOSDIr6KJCExiikFK+iRwSQBCEwmcEADZRIQmCgSkDZBFlFAyEkwU7WQAwSckgFAJjBOyiSgZWk7rt3Rqy2qqmkUoN2MOBnI58o/XwRuv3dGrLamqBbSg3Yw3BmI58o/XwWodM+l8OzKfENMpHDDG2wvYWBIHssHNES6bdLafZkA4gHPItFEwhpIH+Vo5r63R/asdTBHNGbxytDmnW+rXciDceS8t7a2vNVzOmneXyOPgANGtGgHJbDuBrC+lqYHG7Y52Pb3CVpuB5xk+ZQauldVhxGGfJWNCIaEIQIlRDdSpFNBmm/ZhGzWDT5ZF5fNy4LBAFv2/n+zI/y2H/TlWBlFi6jrJIZGyRPcyRjg5rmmzg4L0Hu56dsr4+B/CyqYPnGDBrx90j7ubdPBedFfQ1ckMjZInuZIxwc1zTZwIQazvT3cAcVbRNwxdNE0YczJGPVvmOSyAr0Ru76cR7QZwScLKlgu9gwa8ayRjlzGnguW3p7t7cdbRMwxdNEweZkjA95b5hBkAKVkKd0VHJAKRCEAQnl4pgqJCBgpEIUh3oFkgFDgkgZCAEwk4IC60jdhu7+VubU1QIphixhuDORz/B+qe67d0astqqppFKDdjDgZyOf4P1Wo9OelcGzacEhpltaGJtm3tgMvZYP4BES6b9LoNmU4waZCOGGJtm3tgMB7LBz9y847Z2xNVTOmneXvcf/AKgaNaNAOSNt7WmqpnTzPL3uPk0aNaNAOS/AgZC2H6n1xDay2ZdSekqx5q2T6nxwtWeNL6SoNebHhjidUwpJFENCEIBVl3DnkpkqPBfNBm2/YH+jGE/fkWHd1cqwVb3v2aRs1gzHyyK3/jlwWCAIsPPxQcEXsjPxRVtFVyQyNlie5kjHBzXNNiHBehd3PTxlfHwP4WVTB22A2DwP7yMcuY08F50X6KOrfDI2SJxZIxwc1zTYtIRGr70N3Xt1tFHhi6aJg/OkjaPeWjxCyBei93PTyOvj4H8LKpjbyMGAeBnJGOXNunguU3p7uMHVtEzDF00TB5mSMfEtHiEGQAoy8UZIBRSTBSITyQO1lFO/NIhAwU7JAIBQIrSd2G7p1XapqWkUwN2MNwZiNf8Ap9+qe6/d0asipqmkUwN2MOBnI1P4P1Wp9Nul8GzKf7UylvDDE2wvYWGA9lgw9ERHpn0wh2bTXIaZS3hiibZt7CwNh7LBhj5BecttbWmqpnTTvL5HHyA0a0aAck9s7XmqpnTTuL3uOPIDRrRoByX4SECBUre5IBHEiglbF9T427a38ak9JVjpC2L6n19m1vPipLe6VEa8HkYHP1VjQoNj55qTSiJIQhAimkQocds0Gd7+f7Mj/LYf9OVYIfit437EnZjDl9mRWHd1cqwRFgQE80ZIqXqoITz8UFtFVyQyNkie5kjHBzXNNnAhehN3vTlm0I+B9mVLGgyMGAeBnJGOXMaeC87ZeKuoqySGRssT3MkY4Oa5ps4EIjWd6e7jB1bRMwxdNEwaZmSMD4tHiNVj69F7uunkdfHwPsypYPnGZB4+6R93MaeC5Peju79usomXGLpomDzMkY9W+Y1QZEO9RKEwUUlId6VkiUDctJ3XbujVltVVNIpQbsYcDORr/wBP18Et2O7x1XaqqWEUwN2MdcGcj/8APv18FqXTTphBs2nBsDIW8MUTbC9sMR9qwc0QdNuldPsyEHAylvDFE2wvYWFwPZYMPRec9t7Vmqp3TTvL3uPkBo1o0A5Jbb2vNVzumneXvcfJo0a0aAcl+IFAlJvwX3uiPRCo2jLwQgNY0jjkffq2Dy9p3cPhmtr2Luo2dC0dYx1S/V0xPCfBgwAQedXfBJema7dxsyRpb8kiZhnFeN3vast6b7rZKVpmpXOmhbcvY4fPxjmLYSN9xHfmAzlq2X6nu1qzxpbe6VY0Sti+p9Zdtbz4qS3ulQbGkVASaHP1U2hENCEIAlVlt88lMpoMz37X/oyMHH7Mise7q5Vgq37fz/Zkf5bD/pyrAyiwskZpICKE8vFS9VBA8/FJCn6oLaKrfDI2WNzmSMcHNc02IIXoPd107jr4+B/CypY35xmj2j+8j7uY08F50KvoaySGRssTnMkY4Oa5psQQiNa3qbuParaJlxi6aJg98kY9W+Y1WPgL0Ru96dsr4+rfwx1TW9tgwDwM5Ih6t0X5OlW6SmqpDNTyupnuxcAwSQuPMNuC0+Bt3IMDvdaRuu3dGrc2qqmkUrTdjDgZ3DXuj9fBdT0e3MQRSCSqndUBpuI2xiKIn/nxJcO7BdP016WQbMhv2TKW2ihbYXIwBIHstHNBPpt0vg2ZTjBpkLbRRNsL2wGXssHNecdtbXlq53TTuLnuPk0aNaNGjkjbm1pqud007i6Rx8gNGtGgHJfmpKSSVwZGx8jz9qxpe73DRBSQrqOlfLI2NgLnve1jQMy9xsB7yumod3O05f8AhXsv90cxmHvWhbtt2stLVCpqjETG09UxjuO0jsC4m2YFwPEoO32HsiHZlCG8TWthjc+V5wDiBxSPPuPksT6Y7y6urkIie+np7nhbGeF7m6F7hjc52GXeu8359Iuqpm0bD258ZLZiFpy8zb3LDG/BB9nZXSyup3h8dVPcHEPkdI09xDicFvW73pW3adM5xAZURkNlb9riOy5v/K4A+BBGi81uXU7s+kXyHaEbybRSfNS8uBxFneTrH3oP1b1ujYoq4ljeGGcGRgAwa6/zjB4Eg+Dguv8AqfH2bW/jUnpKu53h9GG7Ro+rBaJWuD4XHLiyINtC0ke7kvj7p+iNRs81In6v5wwcBY/ivw9ZxX5e0EHfBmpz9FNpTSKIaEIQIhR47Zqarc3i8EGcb9nE7NYch8sit/45cVggK3vfsT/RkYP35F5jq5VgiLDIRl4oy8UFFK6eaSYwQGSV080kDz8UAIATz8UEoZ3McHsc5rmm7XNJa4HmCMl3Wxt7W0YQGvMFQAP7+M8f57CL+YK4FMBEaJtHfDtGRtmNpoBY4sjc+TyL3ED3Lgq+ukmkMkr3yPdm57i5x81Te6ig+/0M6MybQqRCy7WgcUj7X4I9fEnIBehdk7KotmU1ohHEwC75JCONx1dI85nu8gLLldxuzxHs4zAXkqJ5MfwcR6sD84PPmuE3v9Inz1z6YOIgpy1tgbB81gXvdzsTwjlwnmg0ar3s7MiJDXzTO1McTrHwc6wK+BWb7Y7kw0cpP4aVkYPeQ0OWMlMBB9PpFtqatqX1E5bxutg0EMawey1oOg/evmEp3USEUwUcKQClf3INL6Nb35qeJkU9O2o4GhrZBKY5OEYAOaWkOPfguopt89E/+shqoiNeGOQfquv8FhRCAER6n6OdMKOuHzEoc8C5Y4FklufCcV90LyJQ1r4ZGyROcyRjg5rmmxDh/OWq9TdEtsfLKKCosAZIgXAZCQEteB3cTSiProQhAiE0iEg7mgznfz/Zkf5bD/pyrAyFvO/Z99mstl8si9/VyrBAUWBAKZCMkU7aqKLpkIEpWSASugCUJ5oAQMC6iSglPPxQJSAukAglB6F3IVbX7KawW4op6hjufaeZG/CQe5ZPvW2W+n2rPxA8MzuujOjmvA4vMP4h7uav3YdMf6PqSJL/ACeXhbJbHhI9l9tbXN+4rbOlWwaXalK1ri13E3jhljs4tJGDmnVp1GqI8wDFJy+p0l2FPQ1DoJ28Lhi0j2JGaPYdR6ZL5YKBJtRwoJRQ5JMFFkA1BQSmwEkAAkkgAAEkk4AADM30QJoJIABJJAAAuSSbAAaklepegeyHUmzaaB+D2RXeM7SSOMj2+RcR5Ljd1u7oUwFVVtBqM44zYiEaE85PTJagERJCEIgVT28XgrCE0Gdb7oHP2UTb+qqYHut/hPFHf3yBefl662ts6OohkhlF2SMcx3gR/J8l5h6WdGZtnzujlBLbnq327EjNCDz5jRFj4owSPNIoBRQmE7aqJKBnFJAKlbVAgNUziokoQCYCdrpEoGcVFCkBdAgFoO6fpnLTVDKUgyQTSBobrG95xczuviR4lZ8Suw3R0XW7Xgwv1fWSfmtI9XBEazvmpIX7LfI9oL43MMTtQ4uAIB5ELzqAt337VPBQxxA/1tQDbuYC71ssJJQh30USEJjFAgFK+iRSRQQtD3HU8TtouMjQXMgc6K4vZ/EASO+xKz0cl2G6erEW1oL5P44+7tNP7kR6P4ScfcrWlNKyIaEIQIhJrvepKp4vl70A48WAy1P7AvzbV2RBUxGKaNkjDo9t7HmORX6onaZEaKxBmdXucoJHHhfVQdzHse3y42lflG5SjvYVVYed+ot/kWoS9o2GmvJOE27OR9e9BmX1kaT76rf/AEfQVY3KUd7GqrByt1Fj+otWVMpv2Rn6IMvO5SjvYVVYT/2LD9RWfWRpPvqt/wDR9BaZFhgc+fNXIMpO5SjvY1NYOVuot/kQ/cpRg2FVWk/9j49hajMdMyfh3qMfZNjrqgzT6yNJ99Vvl1H0FB+5SjBxqay3MdR8ewtVVcrtMydEGXP3J0Y/4qtJ0H2P9BT+sjSffVZ5dR9BaWwcJx115dyvQZVJuUpBnU1luY6i/n2F9zolu6p9mz9fFNUSuMbmBsnVcNnWxHC0HRdtI4Ac+7mqmt4cTl6IMq3+0chhppcS1skjXWyaXAFt/wA23msXzXrfbOyoquB8EzeKN7bHQjkQdCOaw7be52tiefk74qiO/ZLniGW2gc09knvBx5DJFZwAr6WmfI8RxMfI85NY0ucT4BaVsLc5UucHVkjIYwRdsJEszhyvbhb44+C1zo70ZpKJnDTRMZhi72pHfjPOJQ15m2r0fqqYA1FPNCDkXsIb4XyXy7L2BVwMewtka17CMQ9oc0+RWY9Kt0MMwMlE4U78T1b7uhPhbFnlcdyGsOJXRbvKV8u06ZrASRKHm2jW4k/zzX2ot0W03Otw0wF/aNQCz4Au+C1bd/0Ci2Yxzy/rah4AfJw8LWt/wRt0HecT7gA7FrwRdAN1Xa+IGHqrQUQ0IQgRTASKGuQRkZfEYFV9YXYDA6/wUnuJNh5nkgxYYYEfzigmxthYJSMv46IjffPApSP0Gfogh1h9n7b4eKtYywUOpFu/nrdON+hz9UEnsuFV1hHZzOinI/QZpCEWxz563QSjZbvOpUnNuLFQY/Gxz0PNOR9u86IK+sLcDjy/irI2WxOJURFhjiT/ADghjiDY+RQWEXVJfw4HEac/BWyPt+xQbHfF2JPwCBxs1OforCFUDw4HLQ/sKm99ggrJ4O9vxCbG3xPkOSGsvi7yHIJez+L6ILlS7s4/a6jl4K0uAF1W1vEbnLQftKBMHFictB+1XKkjhxGWo5K3iFr6IK3jhxGWoSb2sftfVAHFn7Pqm5tjceY/cgtSshrri6QN0EkIQgFW8clYhBCO1lNIhBQVyi5wz5pwi2GuqmBZBCBquUX8fRTQAgriFs8/VWpEIughMLi2uiUYscc+asAQQgahLa2KkEAIKo22OOeiuSIQECfa2KqY2xF/LuVtlIhAJO70AJWQUtbzvbTuX6EKIFkDKo4fzb5K4i6kgQTUQLIIughw8slaEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQf/9k="} />
                <CustomSideBar label={"Send email"} icon={"https://i0.wp.com/www.pngfind.com/pngs/m/74-749231_png-file-svg-send-message-icon-png-transparent.png"} />
                <CustomSideBar label={"Drafts"} icon={"data:image/png;base64,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"} />
                <p></p>
                <CustomSideBar label={"All mails"} icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-OnTBl6MUmludCewEuIK1eLneKWkbmlSmYaShsEGRhHp_fmZuIsmlM0fSZ46Su_yjMiKVSiNaqva7Q&usqp=CAU"} />
                <CustomSideBar label={"Trash"} icon={"https://image.shutterstock.com/image-vector/one-sheet-document-icon-pattern-260nw-1162821019.jpg"} />
            </Wrapper>


        </>
    )
}