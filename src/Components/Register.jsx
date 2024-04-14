import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";
import HomeFooter from "./HomeFooter";
import { initialErrorStates } from "../constants/errorConstants";
import { componentDivider, registerArrowFour, registerArrowOne, registerArrowThree, registerArrowTwo, registerHeaderGuy, registerTrophy } from "../assets";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./UI/SelectUI";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./UI/CardUI";
import { useDropzone } from 'react-dropzone'
import { RxCross2 } from "react-icons/rx";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "./UI/DialogUI";
import { Button } from "./UI/ButtonUI";

function InputBox ({ label, name, type, value, handleChange, isRequired, error}) {
    const isNumber = type === 'number'
    const maxLength = type === 'cnic' ? 15 : isNumber ? 12 : undefined
    const formatValue = (inputValue) => {
        let result = inputValue
        if (type === 'number') {
            result = inputValue.replace(/\D/g, '').substring(0, maxLength)
            if (result.length > 4) {
                result = `${result.slice(0, 4)}-${result.slice(4)}`
            }
        }
        if (type === 'cnic') {
            result = inputValue.replace(/\D/g, '').substring(0, maxLength)
            if (result.length > 5) {
                if (result.length === 13) {
                    result = `${result.slice(0, 5)}-${result.slice(
                        5,
                        12
                    )}-${result.slice(12)}`
                } else {
                    result = `${result.slice(0, 5)}-${result.slice(5)}`
                }
            }
        }
        return result
    }
    let colorBorder = error ? "border-red-700" : "border-black"
    let textColor = error ? "text-red-600" : "text-black"

    return (
        <div className="w-full">
            <div className="relative z-0 w-full mb-5 group">
            <div className="flex flew-row">
            <h1 className={`font-Gotham text-lg ${textColor} font-bold mb-2`}>{label}</h1>
            <span className={`${textColor} text-2xl font-Gotham`}>{isRequired && ' *'}</span>
            </div>
                <input
                    type={isNumber ? 'tel' : type}
                    name={name}
                    id={name}
                    className="focus:outline-none font-Gotham"
                    placeholder=" "
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: 'none',
                        borderBottom: '4px solid black',
                        backgroundColor:"transparent",
                        outline: 'none',
                    }}
                    required={isRequired}
                    value={formatValue(value)}
                    onChange={(e) => handleChange(name, e.target.value)}
                    {...(isNumber && {
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    })}
                    maxLength={maxLength}
                />
            </div>
        </div>
    )
}

function PaymentInfo(){

    const info = {
        title: "Muhammad Shahmir Raza",
        number: "03188409943",
        // iban: "PK94FAYS0169007900161339",
        // bcode: "169",
        bank_name: "Nayapay",
    }

    return (
        <div className=' flex flex-col gap-1 md:gap-2 my-2 md:my-3 rounded-xl text-white p-3 md:p-5 bg-gray-800'>
            <div className='text-lg md:text-xl mb-5'>Pay Fees in the following Account and upload the receipt</div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Bank Name: </div>
                <div className=''>{info.bank_name}</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Account Title: </div>
                <div className=''>{info.title}</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Account Number: </div>
                <div className=''>{info.number}</div>
            </div>
{/*             <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>IBAN: </div>
                <div className=''>{info.iban}</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Branch Code: </div>
                <div className=''>{info.bcode}</div>
            </div> */}
        </div>
    )
}

function UploadCloudIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m16 16-4-4-4 4" />
        </svg>
    )
}

function RegisterPage(){
    const [compData, setCompData] = useState([]);
    const [competition, setCompetition] = useState({});
    const [competitionType, setCompetitionType] = useState('')
    const [competitionTypes, setCompetitionTypes] = useState([]);
    const [error, setError] = useState(initialErrorStates);
    const [teamNumber, setTeamNumber] = useState(1)
    const [files, setFiles] = useState(null)
    const [loadText, setLoadText] = useState("Submit")
    const [loading, setLoading] = useState(false)
    const [showDialog, setShowDialog] = useState(false)

    const [teamName, setTeamName] = useState('')
    const [member1, setMember1] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [member4, setMember4] = useState('')
    const [member5, setMember5] = useState('')

    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [email3, setEmail3] = useState('')
    const [email4, setEmail4] = useState('')
    const [email5, setEmail5] = useState('')
    
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [phone3, setPhone3] = useState('')
    const [phone4, setPhone4] = useState('')
    const [phone5, setPhone5] = useState('')

    const [cnic1, setCnic1] = useState('')
    const [cnic2, setCnic2] = useState('')
    const [cnic3, setCnic3] = useState('')
    const [cnic4, setCnic4] = useState('')
    const [cnic5, setCnic5] = useState('')

    const [referenceCode, setReferenceCode] = useState('')

    const csCompetitions = compData.CS || null;
    const generalCompetitions = compData.General || null;
    const roboticsCompetitions = compData.Robotics || null;
    const esportsCompetitions = compData.Esports || null;


    const competitionOptionsMap = {
        "CS Competitions": csCompetitions,
        "General Competitions": generalCompetitions,
        "Robotics Competitions": roboticsCompetitions,
        "Esports Competitions": esportsCompetitions,
    };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/png, image/jpeg',
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles[0])
        },
    })

    let competitionOptions = competitionOptionsMap[competitionType] || [];

    const handleCompetitionTypeChange = (e) => {
        setCompetitionType(e.target.value)
        setCompetition({})
    }

    const handleInput = (name, value) => {
        console.log(name, value);
        if (name === 'competitionType') {
            setCompetitionType(value);
            setCompetition('');
            error.competition({ ...error, competitionType: false })
        }
        const setters = {
            member1: setMember1,
            member2: setMember2,
            member3: setMember3,
            member4: setMember4,
            member5: setMember5,
            email1: setEmail1,
            email2: setEmail2,
            email3: setEmail3,
            email4: setEmail4,
            email5: setEmail5,
            phone1: setPhone1,
            phone2: setPhone2,
            phone3: setPhone3,
            phone4: setPhone4,
            phone5: setPhone5,
            cnic1: setCnic1,
            cnic2: setCnic2,
            cnic3: setCnic3,
            cnic4: setCnic4,
            cnic5: setCnic5,
            teamName: setTeamName,
            referenceCode: setReferenceCode,
        };
        const setter = setters[name];
        if (setter) {
            setter(value);
            if  (error[name] === true){
                setError({ ...error, [name]: false });
            }
        }
    };

    const handleSubmit = async () => {
        
        if (Object.keys(competition).length === 0 || competitionType === '') {
            alert('Please select a competition')
            if (competition === ""){
                setError({ ...error, competition: true})
            }
            if (competitionType === ""){
                setError({ ...error, competitionType: true})
            }
            return
        }

        if (teamName === ''){
            alert("Please Enter a team name")
            setError({...error, teamName: true})
            return
        }

        if (member1 === '' || email1 === '' || phone1 === '' || cnic1 === '') {
            alert('Please fill in the required fields')
            setError({...error, 
                member1: member1 === "",
                phone1: phone1 === "",
                cnic1: cnic1 === "",
                email1: email1 === ""
            });
            return
        }

        if (competition.name === "Counter-Strike 2 (CS2)"){
            if (member2 === '' || email2 === '' || phone2 === '' || cnic2 === '') {
                alert('Please fill in the required fields')
                setError({...error, 
                    member2: member2 === "",
                    phone2: phone2 === "",
                    cnic2: cnic2 === "",
                    email2: email2 === ""
                });
                return
            }

            if (member3 === '' || email3 === '' || phone3 === '' || cnic3 === '') {
                alert('Please fill in the required fields')
                setError({...error, 
                    member3: member3 === "",
                    phone3: phone3 === "",
                    cnic3: cnic3 === "",
                    email3: email3 === ""
                });
                return
            }

            if (member4 === '' || email4 === '' || phone4 === '' || cnic4 === '') {
                alert('Please fill in the required fields')
                setError({...error, 
                    member4: member4 === "",
                    phone4: phone4 === "",
                    cnic4: cnic4 === "",
                    email4: email4 === ""
                });
                return
            }

            if (member5 === '' || email5 === '' || phone5 === '' || cnic5 === '') {
                alert('Please fill in the required fields')
                setError({...error, 
                    member5: member5 === "",
                    phone5: phone5 === "",
                    cnic5: cnic5 === "",
                    email5: email5 === ""
                });
                return
            }
        }

        if (competition.name === "Scavenger hunt") {
            if (member2 === '' || email2 === '' || phone2 === '' || cnic2 === '') {
                alert('Please fill in the required fields')
                setError({...error, 
                    member2: member2 === "",
                    phone2: phone2 === "",
                    cnic2: cnic2 === "",
                    email2: email2 === ""
                });
                return
            }
        }

        if (files === null) {
            alert('Please upload a payment receipt')
            setError({...error, file: true})
            return
        }

        setCnic1((cnic) => cnic.replace(/-/g, ''))
        setCnic2((cnic) => cnic.replace(/-/g, ''))
        setCnic3((cnic) => cnic.replace(/-/g, ''))
        setCnic4((cnic) => cnic.replace(/-/g, ''))
        setCnic5((cnic) => cnic.replace(/-/g, ''))

        setPhone1((e) => e.replace(/-/g, ''))
        setPhone2((e) => e.replace(/-/g, ''))
        setPhone3((e) => e.replace(/-/g, ''))
        setPhone4((e) => e.replace(/-/g, ''))
        setPhone5((e) => e.replace(/-/g, ''))

        const participantData = {
            Competition: competition.name,
            Competition_type: competitionType,
            Team_Name: teamName,
            Leader_name: member1,
            Leader_email: email1,
            Leader_whatsapp_number: phone1,
            Leader_cnic: cnic1,
            mem1_name: member2,
            mem1_email: email2,
            mem1_whatsapp_number: phone2,
            mem1_cnic: cnic2,
            mem2_name: member3,
            mem2_email: email3,
            mem2_whatsapp_number: phone3,
            mem2_cnic: cnic3,
            mem3_name: member4,
            mem3_email: email4,
            mem3_whatsapp_number: phone4,
            mem3_cnic: cnic4,
            mem4_name: member5,
            mem4_email: email5,
            mem4_whatsapp_number: phone5,
            mem4_cnic: cnic5,
            reference_code: referenceCode,
            
        }

        try {
            setLoadText("Submitting...");
            const reader = new FileReader()
            reader.readAsDataURL(files)
            reader.onload = async () => {
                const base64Image = reader.result
                participantData.image = base64Image

                setLoading(true)
                const response = await fetch(
                    'https://api.acmdevday.com/addParticipant',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(participantData),
                    }
                )

                if (response.ok) {
                    console.log('Submitted successfully:', response)
                    setShowDialog(true)

                    setMember1('')
                    setMember2('')
                    setMember3('')
                    setMember4('')
                    setMember5('')
                    setEmail1('')
                    setEmail2('')
                    setEmail3('')
                    setEmail4('')
                    setEmail5('')
                    setCnic1('')
                    setCnic2('')
                    setCnic3('')
                    setCnic4('')
                    setCnic5('')
                    setPhone1('')
                    setPhone2('')
                    setPhone3('')
                    setPhone4('')
                    setPhone5('')
                    setReferenceCode('')
                    setCompetition('')
                    setCompetitionType('')
                    setTeamName('')
                    setFiles(null)
                } else {
                    console.log(response)
                    throw new Error('Failed to submit form')
                }
            }
        } catch (error) {
            atert('Error is Submitting form, Please try again')
        } finally {
            setLoading(false)
            setLoadText("Submit")
            setError({
                competition: false,
                competitionType: false,
                teamName: false,
                member1: false,
                cnic1: false,	
                email1: false,
                phone1: false,
                member2: false,
                cnic2: false,
                email2: false,
                phone2: false,
                member3: false,
                cnic3: false,
                email3: false,
                phone3: false,
                member4: false,
                cnic4: false,
                email4: false,
                phone4: false,
                member5: false,
                cnic5: false,
                email5: false,
                phone5: false,
                file: false,
            })
        }
    }

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.acmdevday.com/getCompetitions');
                if (!response.ok) {
                    throw new Error('Failed to fetch competitions');
                }
                const data = await response.json();
                setCompData(data);
            } catch (error) {
                console.error('Error fetching competitions:', error);
            }
        };

        const newCompetitionTypes = [];
        if (compData) {
            if (compData.CS && compData.CS.length > 0) {
                newCompetitionTypes.push("CS Competitions");
            }
            if (compData.General && compData.General.length > 0) {
                newCompetitionTypes.push("General Competitions");
            }
            if (compData.Robotics && compData.Robotics.length > 0) {
                newCompetitionTypes.push("Robotics Competitions");
            }
            if (compData.Esports && compData.Esports.length > 0) {
                newCompetitionTypes.push("Esports Competitions");
            }
        }

    

        setCompetitionTypes(newCompetitionTypes);
        fetchData();


    },[compData])


    return (<>
    <Navbar />
    <div className="flex flex-col items-center">
        <div className="flex flex-row">
            <h1 className="mt-20 text-headerColorOne font-Gotham font-extrabold text-[30px] md:text-[50px] lg:text-[80px] sm:mb-8 md:mb-8">
                REGISTER NOW!
            </h1>
            <img src={registerHeaderGuy} alt="registerHeaderGuy" className="h-80 w-80 hidden lg:block md:block"/>
        </div>   
        </div>
        {/* FOR MEDIUM + LARGE SCREENS, SHOW THE COMPLETE ARROW UI*/}
        <div className="hidden  lg:block xl:block 2xl:block ml-[15%]">
            <img src={registerArrowOne} alt="regarrow1" className=" w-[50%] h-[50%]" />
        </div>
        {/* FOR SMALL SCREENS, SHOW ONLY THE CIRCLE WITH THE NUMBER*/}
        <div className="lg:hidden  mb-8 flex justify-center gap-2 z-0">
            <div className="relative top-10">
                <div className="flex flex-col gap-4">
                    <div class="flex justify-center ">
                        <svg
                            width="115"
                            height="115"
                            viewBox="0 0 231 231"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M86 69.375L111.125 61.875H124.25V150H105.25V81.375L90 85.125L86 69.375ZM163.734 150H143.484V130H163.734V150Z"
                                fill="black"
                            />
                            <circle
                                cx="115.5"
                                cy="115.5"
                                r="113"
                                stroke="#000000"
                                stroke-width="5"
                                stroke-dasharray="10 10"
                            />
                        </svg>
                    </div>
                    <p className="p-4 text-center text-black font-circularStd">
                        Select the department of competitions you wish
                        to participate in!
                    </p>
                </div>
            </div>
        </div>
        {/* LIST ALL THE COMPETITIONSSSS */}
        <div className="ml-[10%] md:ml-[20%] flex flew-row items-center">
            <div className="">
                <h2 className="hidden lg:block font-Gotham font-extrabold sm:text-center text-[30px] md:text-[40px] lg:text-[60px] md:text-center text-headerColorTwo ">
                    COMPETITIONS
                    <span className="text-red-700">{error.competitionType && ' *'} </span>
                </h2>
                <br />
                <div className="text-start mb-4 md:mb-22 rounded-2xl flex flex-row">
                    <img src={registerTrophy} alt="registerTrophy" className="h-48 w-48"/>
                    <div className="flex flex-col mt-10 relative z-1">
                        {competitionTypes.map((type) => {
                            return (
                                <div className="flex flex-row">
                                    <input
                                        type="radio"
                                        id={type}
                                        name="options"
                                        value={type}
                                        className="mt-2 h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 "
                                        onChange={
                                            handleCompetitionTypeChange
                                        }
                                    />
                                    <label
                                        for={type}
                                        className={`font-Gotham text-lg text-headerColorTwo lg:text-2xl md:text-xl ${
                                            type === competitionType
                                                ? 'text-black'
                                                : ' '
                                        } ml-2`}
                                    >
                                        {type}
                                    </label>
                                    <br />
                                </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <img
                        src={registerArrowTwo}
                        alt="arrow2"
                        className="hidden lg:block scale-[70%] right-[6%] absolute mt-[35%]"
                    />
                </div>
                {/* FOR SMALL SCREENS, SHOW ONLY THE CIRCLE WITH THE NUMBER*/}
                <div className="lg:hidden  mb-8 flex justify-center gap-2 z-0">
                    <div className="relative top-10">
                        <div className="flex flex-col gap-4">
                            <div class="flex justify-center ">
                            <svg
                                    width="115"
                                    height="115"
                                    viewBox="0 0 231 231"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M109.625 78.5C102.875 78.5 98.25 82.25 91.75 90.25L78.25 79.375C86.875 67.625 95.25 61.25 110.875 61.25C129.5 61.25 141 72 141 88.375C141 103 133.5 110.375 118 122.375L103.75 133.375H141.875V150H77.125V134.75L106.25 110.875C117.125 101.875 121.375 97.125 121.375 89.875C121.375 82.5 116.5 78.5 109.625 78.5ZM176.881 150H156.631V130H176.881V150Z"
                                        fill="black"
                                    />
                                    <circle
                                        cx="115.5"
                                        cy="115.5"
                                        r="113"
                                        stroke="#000000"
                                        stroke-width="5"
                                        stroke-dasharray="10 10"
                                    />
                                </svg>
                            </div>
                            <p className="p-4 text-center text-black font-circularStd">
                                Select the competition you wish
                                to participate in!
                            </p>
                        </div>
                    </div>
                </div>
                {/* ACTUAL COMPETITION SELECTION SECTION*/}
                <div className="mt-0 lg:mt-[20%]">
                    <h1 className="hidden lg:block font-Gotham font-extrabold sm:text-center text-[30px] md:text-[40px] lg:text-[60px] md:text-center text-headerColorTwo">
                        SELECT A COMPETITION
                        <span className="text-red-700">{error.competition && ' *'} </span>
                    </h1>
                    <div className=' flex justify-center align-center'>
                    <div className="mx-6 w-[80%] border-4 border-black relative font-Gotham">
                        <Select 
                            className="bg-white text-black"
                            onValueChange={(value) => {
                                competitionOptions.map((comp) => {
                                    if (comp.name === value) {
                                        setCompetition(comp)
                                        if (competition.maxMembers === 1) {
                                            setTeamNumber(1);
                                        }
                                        setTeamNumber(0);
                                        
                                        setMember2('')
                                        setMember3('')
                                        setMember4('')
                                        setMember5('')
                                        setEmail2('')
                                        setEmail3('')
                                        setEmail4('')
                                        setEmail5('')
                                        setCnic2('')
                                        setCnic3('')
                                        setCnic4('')
                                        setCnic5('')
                                        setPhone2('')
                                        setPhone3('')
                                        setPhone4('')
                                        setPhone5('')

                                        return
                                    }
                                })
                            }
                            }    
                        >
                            
                            <SelectTrigger
                                aria-label="Social Media Activity"
                                className="bg-white text-black focus:ring-0"
                            >
                                <SelectValue
                                    placeholder="Select Competition"
                                    className="text-black"
                                />
                            </SelectTrigger>
                            <SelectContent className="bg-black font-circularStd text-white border-0 focus:ring-0">
                                <SelectGroup>
                                    <SelectLabel>Select Competition</SelectLabel>
                                    {competitionOptions.map((comp) => {

                                        return (
                                            <SelectItem
                                                value={comp.name}
                                                className="hover:bg-slate-900 b-2"
                                            >
                                                {comp.name}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="absolute inset-y-0 end-1 right-2 top-1 flex items-center pointer-events-none">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 41 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.4485 34.7642L40.0663 0.785213H0.830776L20.4485 34.7642Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/*FOR LARGER SCREENS    */}
            <div className="hidden lg:block lg:items-center lg:flex-col z-0 lg:-mt-[110px] scale-75">
                <img src={registerArrowThree} alt="" />
            </div>
            {/* FOR SMALL SCREENS, SHOW ONLY THE CIRCLE WITH THE NUMBER*/}
            <div className="lg:hidden  mb-8 flex justify-center gap-2 z-0">
                    <div className="relative top-10">
                        <div className="flex flex-col gap-4">
                            <div class="flex justify-center ">
                            <svg
                                width="115"
                                height="115"
                                viewBox="0 0 231 231"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M115.25 79H80.875V62.5H140V77L117.875 98.125C129.875 100.125 141.375 106.375 141.375 122.75C141.375 139.375 129.375 151.5 109.875 151.5C94.125 151.5 83.25 145.25 75.75 136.375L89 123.75C95 130.5 101.25 134.25 110.125 134.25C117.375 134.25 122.5 130.125 122.5 123.5C122.5 116.25 116.375 112.25 105.375 112.25H97.375L94.375 100L115.25 79ZM176.637 150H156.387V130H176.637V150Z"
                                    fill="black"
                                />
                                <circle
                                    cx="115.5"
                                    cy="115.5"
                                    r="113"
                                    stroke="black"
                                    stroke-width="5"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        <p className=" p-4 text-center text-black font-Gotham">
                            Enter your team’s accurate information here.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-20  mb-12 mt-0 lg:mt-[-27%]">
                <div className="flex flex-center justify-start w-[240px] sm:w-[400px] md:w-[600px] lg:w-[75%]">
                    <h1 className="hidden lg:block font-bold text-headerColorTwo text-[30px] md:text-[40px] lg:text-[40px] ">
                        TEAM INFORMATION
                    </h1>
                </div>
            </div>
            {
                competition.minMembers > 0 && (
                    <div className='text-black font-Gotham m-5 p-5 bg-white border-4 border-black md:mx-20 lg:mx-48 rounded-2xl flex flex-col md:flex-row gap-5 justify-center align-center text-lg gap-5 mb-16'>
                        <div className='flex flex-col w-full mx-auto ml-5 justify-center '>
                            <div className='flex gap-2 md:gap-5 text-black my-auto'>
                                Competition: <div className='text-black'>{competition.name}</div>
                            </div>
                            <div className='flex gap-2 md:gap-5 text-black my-auto  '>
                                Registration Fees: <div className='text-black '>{competition.price}</div>
                            </div>

                        </div>

                        <div className='flex flex-col w-full ml-5 justify-center'>
                            <div className='flex gap-2 md:gap-5 text-black mr-auto my-auto'>
                                Mininum Team members: <div className='text-black font-bold'>{competition.minMembers}</div>
                            </div>
                            <div className='flex gap-2 md:gap-5 text-black mr-auto my-auto'>
                                Maximum Team members: <div className='text-black font-bold'>{competition.maxMembers}</div>
                            </div>

                        </div>

                    </div>
                )
            }
            <div className="flex flex-col gap-5 w-[270px] sm:w-[350px] md:w-[400px] lg:w-[65%] mx-auto">
                <InputBox
                    label="TEAM NAME"
                    name="teamName"
                    type="text"
                    value={teamName}
                    isRequired={true}
                    error={error.teamName}
                    handleChange={handleInput}
                />
            </div>
            <div className="flex flex-col items-center gap-20 ">
                <div className="flex flex-col mt-16 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%] ">
                    <h1 className={`font-Gotham text-3xl text-black font-bold mb-2`}>TEAM LEADER</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-10">
                        <InputBox
                            label="Full Name"
                            name="member1"
                            type="text"
                            value={member1}
                            isRequired={true}
                            handleChange={handleInput}
                            error={error.member1}
                        />
                        <InputBox
                            label="CNIC Number"
                            name="cnic1"
                            type="cnic"
                            value={cnic1}
                            isRequired={true}
                            handleChange={handleInput}
                            error={error.cnic1}
                        />
                        <InputBox
                            label="Email Address"
                            name="email1"
                            type="email"
                            value={email1}
                            isRequired={true}
                            handleChange={handleInput}
                            error={error.email1}
                        />
                        <InputBox
                            label="WhatsApp Number"
                            name="phone1"
                            type="number"
                            value={phone1}
                            isRequired={true}
                            handleChange={handleInput}
                            error={error.phone1}
                        />
                    </div>
                    </div>
                    {
                    ( competition.name === "Scavenger hunt" || competition.name === "Counter-Strike 2 (CS2)" )&&
                    <div className="flex flex-col  gap-20 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%] ">
                        <h1 className={`font-Gotham text-3xl text-black font-bold mb-2`}>MEMBER 1</h1>
            
                            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-10">
                                <InputBox
                                    label="Full Name"
                                    name="member2"
                                    type="text"
                                    value={member2}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.member2}
                                />
                                <InputBox
                                    label="CNIC Number"
                                    name="cnic2"
                                    type="cnic"
                                    value={cnic2}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.cnic2}
                                />
                                <InputBox
                                    label="Email Address"
                                    name="email2"
                                    type="email"
                                    value={email2}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.email2}
                                />
                                <InputBox
                                    label="WhatsApp Number"
                                    name="phone2"
                                    type="number"
                                    value={phone2}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.phone2}
                                />
                            </div>
                        </div>
                }
                {
                    competition.name === "Counter-Strike 2 (CS2)" && 
                    
                    <>
                    <div className="flex flex-col gap-5 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%] ">
                    <h1 className={`font-Gotham text-3xl text-black font-bold mb-2`}>MEMBER 2</h1>
                            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-10">
                                <InputBox
                                    label="Full Name"
                                    name="member3"
                                    type="text"
                                    value={member3}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.member3}
                                />
                                <InputBox
                                    label="CNIC Number"
                                    name="cnic3"
                                    type="cnic"
                                    value={cnic3}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.cnic3}
                                />
                                <InputBox
                                    label="Email Address"
                                    name="email3"
                                    type="email"
                                    value={email3}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.email3}
                                />
                                <InputBox
                                    label="WhatsApp Number"
                                    name="phone3"
                                    type="number"
                                    value={phone3}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.phone3}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%] ">
                        <h1 className={`font-Gotham text-3xl text-black font-bold mb-2`}>MEMBER 3</h1>
                            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-10">
                                <InputBox
                                    label="Full Name"
                                    name="member4"
                                    type="text"
                                    value={member4}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.member4}
                                />
                                <InputBox
                                    label="CNIC Number"
                                    name="cnic4"
                                    type="cnic"
                                    value={cnic4}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.cnic4}
                                />
                                <InputBox
                                    label="Email Address"
                                    name="email4"
                                    type="email"
                                    value={email4}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.email4}
                                />
                                <InputBox
                                    label="WhatsApp Number"
                                    name="phone4"
                                    type="number"
                                    value={phone4}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.phone4}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%] ">
                        <h1 className={`font-Gotham text-3xl text-black font-bold mb-2`}>MEMBER 4</h1>
                            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-10">
                                <InputBox
                                    label="Full Name"
                                    name="member5"
                                    type="text"
                                    value={member5}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.member5}
                                />
                                <InputBox
                                    label="CNIC Number"
                                    name="cnic5"
                                    type="cnic"
                                    value={cnic5}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.cnic5}
                                />
                                <InputBox
                                    label="Email Address"
                                    name="email5"
                                    type="email"
                                    value={email5}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.email5}
                                />
                                <InputBox
                                    label="WhatsApp Number"
                                    name="phone5"
                                    type="number"
                                    value={phone5}
                                    isRequired={true}
                                    handleChange={handleInput}
                                    error={error.phone5}
                                />
                            </div>
                        </div>
                    </>
                }
                 {competition.maxMembers > 1 && competition.name !== "Counter-Strike 2 (CS2)" && (
                <div className="mx-auto relative z-10  w-[100%]">
                    <h1 className="text-center text-2xl font-bold mb-4 text-headerColorTwo">
                        SELECT NUMBER OF TEAM MEMBERS
                        <span className="text-red-700">{error.competition && ' *'} </span>
                    </h1>
                    <div className=' flex justify-center align-center'>
                        <div className="mx-6 w-full md:w-[950px] relative border-4  font-Gotham font-bold border-black rounded-lg">
                            <Select 
                                className="bg-white  text-black"
                                onValueChange={(value) => {
                                    console.log(parseInt(value))
                                    setTeamNumber(parseInt(value))
                                    if (competition.maxMembers === 1) {
                                        setTeamNumber(1);
                                    }
                                }}
                            >
                                <SelectTrigger
                                    aria-label="Select number of team members"
                                    className="bg-white p-5 text-black focus:ring-0"
                                >
                                    <SelectValue
                                        placeholder="Select number of team members"
                                        className="text-black"
                                    />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white font-Gotham border-0 focus:ring-0">
                                    <SelectGroup>
                                        <SelectLabel>Select Number of Team Members</SelectLabel>
                                        {competition.maxMembers > 1 && (
                                            // If maxMembers is greater than 1, generate options up to maxMembers
                                            Array.from({ length: competition.maxMembers - competition.minMembers }, (_, index) => {
                                                let add = competition.name === "Scavenger hunt" ? 1 : 0;
                                                const numberOfMembers = competition.minMembers + index - add;
                                                return (
                                                    <SelectItem
                                                        value={numberOfMembers}
                                                        className="hover:bg-slate-900 "
                                                    >
                                                        {numberOfMembers}
                                                    </SelectItem>
                                                );
                                            })
                                        )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="absolute inset-y-0 end-1 right-5 top-1 flex items-center pointer-events-none">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 41 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.4485 34.7642L40.0663 0.785213H0.830776L20.4485 34.7642Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {
                teamNumber !== 0 && (
                    <div className="flex flex-col gap-5 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%]">
                        {Array.from({ length: teamNumber }, (_, index) => {
                            let add = competition.name === "Scavenger hunt" ? 2 : 0;
                            const memberIndex = index + 1 + (add);
                            return (
                                <div className='mb-10'>
                                    <h1 className={`font-Gotham text-3xl text-black font-bold mb-2`}>MEMBER {memberIndex} </h1>
                                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-10">
                                        <InputBox
                                            label="Full Name"
                                            name={`member${memberIndex + 1}`}
                                            type="text"
                                            value={eval(`member${memberIndex + 1}`)}
                                            isRequired={false}
                                            handleChange={handleInput}
                                        />
                                        <InputBox
                                            label="CNIC Number"
                                            name={`cnic${memberIndex + 1}`}
                                            type="cnic"
                                            value={eval(`cnic${memberIndex + 1}`)}
                                            isRequired={false}
                                            handleChange={handleInput}
                                        />
                                        <InputBox
                                            label="Email Address"
                                            name={`email${memberIndex + 1}`}
                                            type="email"
                                            value={eval(`email${memberIndex + 1}`)}
                                            isRequired={false}
                                            handleChange={handleInput}
                                        />
                                        <InputBox
                                            label="WhatsApp Number"
                                            name={`phone${memberIndex + 1}`}
                                            type="number"
                                            value={eval(`phone${memberIndex + 1}`)}
                                            isRequired={false}
                                            handleChange={handleInput}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            }
            <div className="flex flex-col md:flex-col gap-5 w-[270px] sm:w-[350px] md:w-[400px] lg:w-[65%] mx-auto">
                    <InputBox
                        label="Reference Code (if any)"
                        name="referenceCode"
                        type="text"
                        value={referenceCode}
                        isRequired={false}
                        handleChange={handleInput}
                    />
            </div>
            </div>

                <Card className="bg-white border-4 border-black mx-2 mb-2">
                    <CardHeader>
                        <CardTitle className="text-headerColorTwo mx-auto mb-3">
                            UPLOAD PAYMENT RECEIPT
                            <span className="text-red-700">
                                {error.file && ' *'}{' '}
                            </span>
                        </CardTitle>
                        <CardDescription>
                            <PaymentInfo/>
                            Drag and drop your image or click the button below
                            to select file.
                        </CardDescription>
                    </CardHeader>
                    <CardContent
                        {...getRootProps()}
                        className={`flex flex-col items-center justify-center border-2 m-1  ${
                            isDragActive
                                ? 'border-blue-500'
                                : 'border-zinc-500 dark:border-zinc-800'
                        } border-dashed rounded-lg space-y-3`}
                    >
                        <input {...getInputProps()} />

                        {isDragActive ? (
                            <p className="text-blue-500">
                                Drop the file here...
                            </p>
                        ) : (
                            <>
                                <UploadCloudIcon className="w-16 h-16 text-zinc-500 dark:text-zinc-400 " />
                                <p className="text-gray-500 ">
                                    Drag & drop image here, or click to
                                    select image
                                </p>
                            </>
                        )}

                        {files && files.type && files.name && (
                            <div className="relative h-44 md:h-72 overflow-hidden round-md">
                                <img
                                    src={
                                        files.type.startsWith('image/')
                                            ? URL.createObjectURL(files)
                                            : ''
                                    }
                                    alt={files.name}
                                    className="rounded-lg"
                                />
                               <div
                                    className="border absolute top-2 right-2 m-1 rounded-full p-2 z-1000"
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2e4f7cdb')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        setFiles(null)
                                    }}
                                >
                                    <RxCross2 className="text-black text-xl" />
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
                <div className="mb-2 lg:hidden flex justify-center gap-2 z-0">
                    <div className="">
                        <div className="flex flex-col  gap-4">
                            <div class="flex justify-center ">
                                <svg
                                    width="115"
                                    height="115"
                                    viewBox="0 0 231 231"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M122.875 61.875H139.125V115.5H150.875V131.125H139.125V150H120.75V131.125H78L74.875 117.5L122.875 61.875ZM120.75 115.5V88.25L97.5 115.5H120.75ZM185.182 150H164.932V130H185.182V150Z"
                                        fill="black"
                                    />
                                    <circle
                                        cx="115.5"
                                        cy="115.5"
                                        r="113"
                                        stroke="black"
                                        stroke-width="5"
                                        stroke-dasharray="10 10"
                                    />
                                </svg>
                            </div>

                            <p className=" p-4 text-center font-Gotham text-black">
                                Review your information and click submit to
                                proceed for payment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-4">
                    <div className='rounded-2xl w-full bg-white p-3 text-black font-Gotham border-4 border-black flex'>
                    <div className='text-black mr-6'>Note:</div>
                    Free transport will be provided to all the participants. <br/>Participants wanting accomodation should email first at pr@nuceskhi.acm.org <br/>Accommodation will be paid.
                </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 w-[300px] md:w-[500px] ml-16 lg:w-2/3 z-10 mb-5">
                    <div className="hidden lg:block col-span-2"></div>
                    <button
                        onClick={handleSubmit}
                        disabled={false}
                        style={{
                            boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
                        }}
                        className={`py-4 px-4 border min-h-10 bg-white text-black font-Gotham lg:text-2xl text-md mt-8 w-48`}
                    >
                        <h1 className="text-2xl font-bold">
                            {loadText}
                        </h1>
                    </button>

            </div>
            
            {/* <div className="hidden font-Gotham lg:block relative top-[-200px] ml-8  z-0">
                <img src={registerArrowFour} alt="registerArrow4" className="scale-[60%]"/>
                
            </div> */}
            
            {showDialog && (
                    <Dialog
                        open={showDialog}
                        onClose={() => setShowDialog(false)}
                        className="bg-gray-800 "
                    >
                        <DialogContent className="bg-gray-900 text-white rounded-xl mx-2 w-72">
                            <DialogHeader>
                                <DialogTitle className="text-center mt-5">
                                    Form Submitted Successfully !!{' '}
                                </DialogTitle>
                                <DialogDescription className="text-center text-md mt-5 ">
                                    <div className='mt-6'>
                                        Your form has been successfully submitted.
                                        You will receive a confirmation email within 48 hours Thank you! 
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button
                                    onClick={() => {setShowDialog(false); window.location.href = '/'}}
                                    className="border border-gray-600 mx-auto"
                                >
                                    OK
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            
            <div className="mt-0">
            <img src={componentDivider} alt="componentDivider" className=" w-[90%] h-2 mt-8 mb-8 mr-4 ml-16"/>

            <HomeFooter />
            </div>
    </>)
}

export default RegisterPage