import React from 'react'
import ComponentCard from '../../../../../components/common/ComponentCard'
import Label from '../../../../../components/form/Label'
import Input from '../../../../../components/form/input/InputField'
import Checkbox from '../../../../../components/form/input/Checkbox'
import { ArrowLeft, ArrowRightIcon, BoxIcon, Paperclip } from 'lucide-react'
import Button from '../../../../../components/ui/button/Button'


export default function Step1() {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
        <div>
            <div className="flex w-full mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">New Application Form</h3>
            </div>

            <div className="w-full">
                <ComponentCard title="Application" className="w-full">
                    {/* Inputs in a row */}
                    <div className="flex flex-wrap gap-2">
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="applicationid">Application ID</Label>
                            <Input type="text" id="applicationid" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="orgnization">Name of the Organization</Label>
                            <Input type="text" id="orgnization" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="natureorgnization">Nature and Constitution of Organization</Label>
                            <Input type="text" id="natureorgnization" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="email">Email Id </Label>
                            <Input type="text" id="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <p className='font-bold'>System Certification applied for (Please click on the appropriate box)*</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ISO 13485"
                            />
                            <Paperclip className='h-4 w-4' />
                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ICMED 13485"
                            />
                            <Paperclip className='h-4 w-4' />
                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ISO 22000"
                            />
                            <Paperclip className='h-4 w-4' />
                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="FSSC 22000 V6"
                            />
                        </div>
                        <div className="flex items-center gap-2 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ISO 9001"
                            />
                        </div>
                        <div className="flex items-center gap-2 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ISO 9001"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ISO 13485"
                            />
                            <Paperclip className='h-4 w-4' />
                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ICMED 13485"
                            />
                            <Paperclip className='h-4 w-4' />
                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ISO 22000"
                            />

                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="FSSC 22000 V6"
                            />
                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            + Any other
                        </div>

                    </div>
                    <div className="flex flex-wrap gap-4">
                        <p className='font-bold'>Product Certification applied for (Please click on the appropriate box)* </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="ICMED 13485 Plus"
                            />

                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="CE Marking-MDR / IVDR"
                            />

                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="CE Marking - Others"
                            />

                        </div>
                        <div className="flex items-center gap-1 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="IECEx Certification"
                            />
                        </div>
                        <div className="flex items-center gap-2 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="EAC Certification"
                            />
                        </div>
                        <div className="flex items-center gap-2 min-w-[150px]">
                            <Checkbox
                                checked={isChecked}
                                onChange={setIsChecked}
                                label="GOST-R Certification"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <p className='font-bold'>Details of Key personnel ( Top Management )* </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="applicationid">Name</Label>
                            <Input type="text" id="applicationid" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="orgnization">Designation</Label>
                            <Input type="text" id="orgnization" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="natureorgnization">Mail Id </Label>
                            <Input type="text" id="natureorgnization" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="email">Mobile </Label>
                            <Input type="text" id="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <p className='font-bold'>Details of Key personnel ( Authorized Representative )* </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="applicationid">Name</Label>
                            <Input type="text" id="applicationid" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="orgnization">Designation</Label>
                            <Input type="text" id="orgnization" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="natureorgnization">Mail Id </Label>
                            <Input type="text" id="natureorgnization" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <Label htmlFor="email">Mobile </Label>
                            <Input type="text" id="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-5">
                            <Button
                                size="sm"
                                variant="primary"   
                                startIcon={<ArrowLeft className="size-5" />}
                            >
                                Button Text
                            </Button>
                            <Button
                                size="sm"
                                variant="primary"
                                endIcon={<ArrowRightIcon className="size-5" />}
                            >
                                Button Text
                            </Button>
                        </div>
                    </div>
                </ComponentCard>
            </div>
        </div>

    )
}
